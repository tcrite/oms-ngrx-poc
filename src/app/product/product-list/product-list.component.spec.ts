import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductListComponent } from "./product-list.component";
import { StoreModule } from "@ngrx/store";
import { MaterialModule } from "../../material";
import { reducers } from "../../store";

describe("ProductListComponent", () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot(reducers)
      ],
      declarations: [ProductListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render title in a h2 tag", async(() => {
    const compiled = fixture.debugElement.nativeElement;
    //expect(compiled.querySelector("h1").textContent).toContain("Products");
    expect(compiled.querySelector("h2").textContent).toContain(
      "Products with Order Details"
    );
  }));
});
