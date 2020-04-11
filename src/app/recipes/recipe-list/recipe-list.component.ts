import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Recipe } from "../recipe.model";
@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected: EventEmitter<Recipe> = new EventEmitter();
  recipes: Recipe[] = [
    new Recipe(
      "A test recipe",
      "This is simply a test",
      "https://p0.pxfuel.com/preview/852/655/759/quinoa-seeds-proper-nutrition-a-healthy-lifestyle.jpg"
    ),
    new Recipe(
      "Another test recipe",
      "This is simply a test",
      "https://p0.pxfuel.com/preview/852/655/759/quinoa-seeds-proper-nutrition-a-healthy-lifestyle.jpg"
    ),
  ];
  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
