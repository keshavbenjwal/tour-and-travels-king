import { Component, inject, signal, computed, OnInit, WritableSignal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { doc, getDoc } from 'firebase/firestore';
import { PackagesFirestoreService } from '../../services/packages-firestore.service';
import { FirebaseService } from '../../services/firebase.service';
import { AdminPackage } from '../../models/admin-package.model';

/** Array-valued fields stored as string[] in Firestore. */
type ListField = 'highlights' | 'includes' | 'excludes';

/**
 * Every field rendered as a chip list. `keywords` is included for the UI but is
 * stored as a comma-separated string, matching the existing data and SeoService.
 */
type ChipField = ListField | 'keywords';

@Component({
  selector: 'app-package-form',
  imports: [
    CommonModule, ReactiveFormsModule, RouterLink,
    MatCardModule, MatFormFieldModule, MatInputModule,
    MatSelectModule, MatAutocompleteModule, MatButtonModule, MatIconModule,
    MatSlideToggleModule, MatProgressSpinnerModule,
    MatDividerModule, MatTooltipModule, MatChipsModule
  ],
  templateUrl: './package-form.component.html',
  styleUrl: './package-form.component.scss'
})
export class PackageFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private pkgService = inject(PackagesFirestoreService);
  private firebase = inject(FirebaseService);
  private snackbar = inject(MatSnackBar);
  private dialog = inject(MatDialog);

  isEditMode = signal(false);
  isLoading = signal(false);
  isSaving = signal(false);
  editId = signal<string | null>(null);

  readonly difficulties = ['Easy', 'Moderate', 'Challenging'];

  form = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(5)]],
    shortTitle: ['', [Validators.required]],
    slug: ['', [Validators.required, Validators.pattern(/^[a-z0-9-]+$/)]],
    duration: ['', Validators.required],
    days: [1, [Validators.required, Validators.min(1)]],
    nights: [0, [Validators.required, Validators.min(0)]],
    startLocation: ['', Validators.required],
    endLocation: ['', Validators.required],
    price: [0, [Validators.required, Validators.min(1)]],
    originalPrice: [0, [Validators.required, Validators.min(1)]],
    difficulty: ['Moderate', Validators.required],
    maxAltitude: ['', Validators.required],
    groupSize: ['', Validators.required],
    badge: [''],
    overview: ['', [Validators.required, Validators.minLength(50)]],
    // Chip lists — Validators.required rejects an empty array.
    highlights: [[] as string[], Validators.required],
    includes: [[] as string[], Validators.required],
    excludes: [[] as string[], Validators.required],
    metaDescription: ['', [Validators.required, Validators.maxLength(160)]],
    keywords: ['', Validators.required],
    active: [true]
  });

  /** Suggestions for the badge field — a custom value can still be typed in. */
  readonly badgeOptions = ['New', 'Popular', 'Adventure', 'Premium', 'Best Value', 'Most Popular'];

  readonly separatorKeys = [ENTER, COMMA] as const;

  /** Preset choices for the three chip-list fields. Custom entries are always allowed. */
  readonly presets: Record<ChipField, string[]> = {
    keywords: [
      'Adi Kailash tour',
      'Om Parvat darshan',
      'Kumaon pilgrimage',
      'Uttarakhand tour packages',
      'Panchachuli trek',
      'Darma Valley trek',
      'Himalayan pilgrimage',
      'Jolingkong lake',
      'Pithoragarh tour',
      'Chota Kailash yatra',
      'Patal Bhuvaneshwar',
      'Kathgodam to Adi Kailash',
      'Inner Line Permit tour',
      'Uttarakhand trekking'
    ],
    highlights: [
      'Om Parvat natural snow Shivling darshan',
      'Adi Kailash (Chota Kailash) parikrama',
      'Jolingkong Holy Lake & Parvati Sarovar',
      'Panoramic views of Panchachuli peaks',
      'Nabhidhang border viewpoint trek',
      'Sacred Narayan Ashram visit',
      'Patal Bhuvaneshwar cave temple',
      'Overnight stay in Gunji base village',
      'Traditional Bhotiya village experience',
      'Sunrise viewpoint over Himalayan peaks',
      'Scenic drive through inner Himalayan valleys',
      'Jageshwar Dham ancient Shiva temples'
    ],
    includes: [
      'All accommodation (hotels/guesthouses/camps)',
      'All meals during the tour (breakfast, lunch, dinner)',
      'Private vehicle transportation throughout',
      'Inner Line Permit for restricted border areas',
      'Experienced local guide and support staff',
      'First Aid kit and emergency support',
      'All tolls, parking, and entry fees',
      'Porterage for common equipment',
      'Oxygen cylinder for high-altitude sections',
      'Welcome and farewell transfers'
    ],
    excludes: [
      'Travel from/to Delhi or your home city',
      'Personal travel insurance',
      'Personal expenses and tips',
      'Any meals not mentioned in the itinerary',
      'Items of personal nature (clothing, trekking gear)',
      'Any activity not included in the program',
      'Cost due to unforeseen circumstances (roadblocks, weather)',
      'Helicopter evacuation charges',
      'Camera/video entry charges',
      'Medical and emergency evacuation costs'
    ]
  };

  /** Mirrors each chip control so the template re-renders (this app is zoneless). */
  private itemSignals: Record<ChipField, WritableSignal<string[]>> = {
    highlights: signal<string[]>([]),
    includes: signal<string[]>([]),
    excludes: signal<string[]>([]),
    keywords: signal<string[]>([])
  };

  /** Text currently typed into each chip input, used to filter the presets. */
  private queries: Record<ChipField, WritableSignal<string>> = {
    highlights: signal(''),
    includes: signal(''),
    excludes: signal(''),
    keywords: signal('')
  };

  items(field: ChipField): string[] {
    return this.itemSignals[field]();
  }

  onQuery(field: ChipField, value: string): void {
    this.queries[field].set(value);
  }

  /** Presets minus what is already chosen, narrowed by whatever is typed. */
  availableOptions(field: ChipField): string[] {
    const typed = this.queries[field]().trim().toLowerCase();
    const chosen = new Set(this.itemSignals[field]().map(v => v.toLowerCase()));
    return this.presets[field]
      .filter(opt => !chosen.has(opt.toLowerCase()))
      .filter(opt => !typed || opt.toLowerCase().includes(typed));
  }

  /** Adds whatever was typed — this is how custom items get in. */
  addTyped(field: ChipField, event: MatChipInputEvent): void {
    this.addItem(field, event.value);
    event.chipInput!.clear();
    this.queries[field].set('');
  }

  pickOption(field: ChipField, event: MatAutocompleteSelectedEvent, input: HTMLInputElement): void {
    this.addItem(field, event.option.value);
    input.value = '';
    this.queries[field].set('');
  }

  removeItem(field: ChipField, item: string): void {
    this.setItems(field, this.itemSignals[field]().filter(v => v !== item));
  }

  private addItem(field: ChipField, raw: string): void {
    const value = (raw ?? '').trim();
    if (!value) return;
    const current = this.itemSignals[field]();
    // Ignore duplicates regardless of casing.
    if (current.some(v => v.toLowerCase() === value.toLowerCase())) return;
    this.setItems(field, [...current, value]);
  }

  private setItems(field: ChipField, items: string[]): void {
    this.itemSignals[field].set(items);

    // keywords is persisted as a comma-separated string; the rest as arrays.
    if (field === 'keywords') {
      const ctrl = this.form.controls.keywords;
      ctrl.setValue(items.join(', '));
      ctrl.markAsDirty();
      ctrl.markAsTouched();
      return;
    }

    const ctrl = this.form.controls[field];
    ctrl.setValue(items);
    ctrl.markAsDirty();
    ctrl.markAsTouched();
  }

  /** Meta description templates. All are kept under the 160-character SEO limit. */
  readonly metaSuggestions = [
    {
      label: 'Spiritual',
      text: 'Join our guided Adi Kailash and Om Parvat yatra through the sacred Kumaon Himalayas. Stays, meals, permits and expert local guides all included.'
    },
    {
      label: 'Adventure',
      text: 'Trek the Kumaon Himalayas to Panchachuli Base Camp and remote Darma Valley. Certified guides, camping, permits and all meals included.'
    },
    {
      label: 'Family',
      text: 'A relaxed Himalayan tour for families and senior travellers. Scenic drives, comfortable hotels, home-style meals and easy walks across Kumaon.'
    },
    {
      label: 'All-inclusive',
      text: 'Explore Adi Kailash, Om Parvat and Panchachuli on an all-inclusive Kumaon tour. Transport, stays, meals and Inner Line Permits handled for you.'
    },
    {
      label: 'Scenic',
      text: 'Discover Kumaon\'s finest Himalayan views — Panchachuli sunrises, alpine meadows and ancient temples. Small groups and all-inclusive pricing.'
    }
  ];

  /** Starting points for the overview field. The admin can edit or ignore these. */
  readonly overviewSuggestions = [
    {
      label: 'Spiritual Pilgrimage',
      text: 'Embark on a soul-stirring Himalayan pilgrimage through the sacred heart of Kumaon. Witness the divine Om Parvat, circumambulate the majestic Adi Kailash, and offer prayers beside pristine glacial lakes. Guided by experienced local hosts, this journey blends ancient devotion with breathtaking mountain scenery, offering pilgrims a rare moment of stillness among the eternal snows.'
    },
    {
      label: 'Adventure Trek',
      text: 'Designed for trekkers who crave genuine high-altitude adventure, this expedition climbs through alpine meadows, glacial moraines, and remote Himalayan valleys. Expect rewarding ascents, spectacular ridge-line views, and nights beneath brilliant star-filled skies. Our certified mountain guides handle permits, logistics, and safety, leaving you free to focus on the trail and the summit panorama ahead.'
    },
    {
      label: 'Family & Seniors',
      text: 'A comfortable, gently paced Himalayan journey crafted for families and senior travellers. Enjoy scenic mountain drives, warm local hospitality, and unhurried sightseeing with ample time to rest and acclimatise. Comfortable accommodation, home-style meals, and short, easy walks make this an ideal introduction to Kumaon\'s ancient temples, green valleys, and legendary snow-capped peaks.'
    },
    {
      label: 'Scenic & Photography',
      text: 'Travel through some of Uttarakhand\'s most photogenic landscapes, from terraced hillsides and deodar forests to thundering rivers and the five sacred summits of Panchachuli. Sunrise viewpoints, alpine flower meadows, and traditional stone villages offer endless frames for photographers, while unhurried travel days ensure you never have to rush past a perfect moment.'
    },
    {
      label: 'Culture & Heritage',
      text: 'Discover the living heritage of the Kumaon Himalayas, where centuries-old stone temples, Bhotiya border villages, and mountain folklore remain beautifully intact. Share meals with local families, explore ancient cave shrines, and learn the myths woven into every ridge and river. A journey for travellers who value culture, conversation, and authentic mountain life.'
    }
  ];

  private badgeInput = toSignal(this.form.controls.badge.valueChanges, { initialValue: '' });

  filteredBadges = computed(() => {
    const typed = (this.badgeInput() ?? '').trim().toLowerCase();
    if (!typed) return this.badgeOptions;
    const matches = this.badgeOptions.filter(b => b.toLowerCase().includes(typed));
    // Keep the full list visible rather than an empty panel for a custom value.
    return matches.length ? matches : this.badgeOptions;
  });

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode.set(true);
      this.editId.set(id);
      this.loadPackage(id);
    }

    // Auto-generate slug from title (add mode only)
    this.form.get('title')!.valueChanges.subscribe(title => {
      if (!this.isEditMode()) {
        const slug = (title ?? '')
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, '')
          .trim()
          .replace(/\s+/g, '-');
        this.form.get('slug')!.setValue(slug, { emitEvent: false });
      }
    });

    // Auto-set duration label from days/nights
    const syncDuration = () => {
      const d = this.form.get('days')!.value;
      const n = this.form.get('nights')!.value;
      if (d && n !== null) {
        this.form.get('duration')!.setValue(`${d} Days / ${n} Nights`, { emitEvent: false });
      }
    };
    this.form.get('days')!.valueChanges.subscribe(syncDuration);
    this.form.get('nights')!.valueChanges.subscribe(syncDuration);
  }

  private async loadPackage(id: string): Promise<void> {
    this.isLoading.set(true);
    try {
      const ref = doc(this.firebase.db, 'packages', id);
      const snap = await getDoc(ref);
      if (!snap.exists()) throw new Error('Package not found');
      const pkg = { id: snap.id, ...snap.data() } as AdminPackage;
      this.patchForm(pkg);
    } catch {
      this.snackbar.open('Could not load package.', 'Close', { duration: 4000 });
      this.router.navigate(['/admin/dashboard']);
    } finally {
      this.isLoading.set(false);
    }
  }

  private patchForm(pkg: AdminPackage): void {
    const highlights = pkg.highlights ?? [];
    const includes = pkg.includes ?? [];
    const excludes = pkg.excludes ?? [];

    this.form.patchValue({ ...pkg, highlights, includes, excludes });

    // Keep the chip signals in step with the freshly loaded values.
    this.itemSignals.highlights.set(highlights);
    this.itemSignals.includes.set(includes);
    this.itemSignals.excludes.set(excludes);

    // keywords arrives as a comma-separated string — split it back into chips.
    this.itemSignals.keywords.set(
      (pkg.keywords ?? '').split(',').map(k => k.trim()).filter(Boolean)
    );
  }

  private buildPayload(): Omit<AdminPackage, 'id' | 'createdAt' | 'updatedAt'> {
    const v = this.form.value;
    return {
      title: v.title!,
      shortTitle: v.shortTitle!,
      slug: v.slug!,
      duration: v.duration!,
      days: Number(v.days),
      nights: Number(v.nights),
      startLocation: v.startLocation!,
      endLocation: v.endLocation!,
      price: Number(v.price),
      originalPrice: Number(v.originalPrice),
      difficulty: v.difficulty as 'Easy' | 'Moderate' | 'Challenging',
      maxAltitude: v.maxAltitude!,
      groupSize: v.groupSize!,
      badge: v.badge ?? '',
      overview: v.overview!,
      highlights: v.highlights ?? [],
      includes: v.includes ?? [],
      excludes: v.excludes ?? [],
      metaDescription: v.metaDescription!,
      keywords: v.keywords!,
      active: v.active ?? true
    };
  }

  async onSubmit(): Promise<void> {
    // Text typed into a chip input but never committed with Enter would
    // otherwise be silently dropped — take it as a chip before validating.
    this.commitPendingChips();

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      const bad = this.invalidFields();
      console.warn('[PackageForm] Invalid controls:', bad);
      this.snackbar.open(`Please fix: ${bad.join(', ')}`, 'Close', { duration: 8000 });
      return;
    }
    this.isSaving.set(true);
    try {
      const payload = this.buildPayload();
      if (this.isEditMode()) {
        await this.pkgService.update(this.editId()!, payload);
        this.snackbar.open('Package updated successfully!', 'Close', { duration: 3000 });
      } else {
        await this.pkgService.add(payload);
        this.snackbar.open('Package added successfully!', 'Close', { duration: 3000 });
      }
      this.router.navigate(['/admin/dashboard']);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error('Save error:', err);
      this.snackbar.open(`Save failed: ${msg}`, 'Close', { duration: 8000 });
    } finally {
      this.isSaving.set(false);
    }
  }

  /**
   * Fills the overview field with a suggestion. Confirms first if the admin has
   * already written something, so a typed description is never lost silently.
   */
  applySuggestion(
    suggestion: { label: string; text: string },
    field: 'overview' | 'metaDescription' = 'overview'
  ): void {
    const ctrl = this.form.controls[field];
    const current = (ctrl.value ?? '').trim();

    if (current.length === 0) {
      this.setText(field, suggestion.text);
      return;
    }

    const label = field === 'overview' ? 'description' : 'meta description';
    const ref = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: `Replace ${label}?`,
        message: `This will replace the ${label} you have written with the "${suggestion.label}" template.`,
        confirmText: 'Replace'
      }
    });

    ref.afterClosed().subscribe(confirmed => {
      if (confirmed) this.setText(field, suggestion.text);
    });
  }

  private setText(field: 'overview' | 'metaDescription', text: string): void {
    const ctrl = this.form.controls[field];
    ctrl.setValue(text);
    ctrl.markAsDirty();
    ctrl.markAsTouched();
  }

  /**
   * Turns leftover text in any chip input into a chip. Any value is accepted —
   * entries do not have to come from the suggestion list.
   */
  private commitPendingChips(): void {
    (Object.keys(this.queries) as ChipField[]).forEach(field => {
      const pending = this.queries[field]().trim();
      if (pending) {
        this.addItem(field, pending);
        this.queries[field].set('');
      }
    });
  }

  /** Human-readable names of every control currently failing validation. */
  private invalidFields(): string[] {
    const labels: Record<string, string> = {
      title: 'Package Title',
      shortTitle: 'Short Title',
      slug: 'URL Slug',
      duration: 'Duration Label',
      days: 'Days',
      nights: 'Nights',
      startLocation: 'Start Location',
      endLocation: 'End Location',
      price: 'Selling Price',
      originalPrice: 'Original Price',
      difficulty: 'Difficulty',
      maxAltitude: 'Max Altitude',
      groupSize: 'Group Size',
      overview: 'Overview',
      highlights: 'Highlights',
      includes: 'Includes',
      excludes: 'Excludes',
      metaDescription: 'Meta Description',
      keywords: 'Keywords'
    };

    return Object.keys(this.form.controls)
      .filter(name => this.form.get(name)?.invalid)
      .map(name => labels[name] ?? name);
  }

  isInvalid(field: string): boolean {
    const ctrl = this.form.get(field);
    return !!(ctrl?.invalid && ctrl?.touched);
  }
}
