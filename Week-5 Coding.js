class Ingredients {
    constructor(name) {
        this.name = name;
    }

    describe() {
        return `${this.name} is in the recipe.`
    }

}

class Recipe {
    constructor(name) {
        this.name = name;
        this.ingredient = [];
    }

    addingrediant(ingredients) {
        if (ingredients instanceof Ingredients) {
            this.ingredients.push(ingredients);
        } else {
            throw new Error (`You only can add an ingredient to the recipe.`);
        }

    }

    describe() {
        return `This ${this.name} has ${this.ingredient.length} ingredients.`
    }

}

class Menu {
    constructor() {
        this.recipes = [];
        this.selectedRecipe = null;
    }


    start() {
        let selection = this.showMainMenuOptions();
            while (selection != 0) {
            
            switch (selection) {
                case `1`:
                    this.createRecipe();
                    break;
                case `2`:
                    this.viewRecipe();
                    break;
                case `3`:
                    this.displayRecipes();
                    break;
                case `4`:
                    this.removeRecipe();
                    break;
                default:
                    selection = 0;                
            }

            selection = this.showMainMenuOptions();

        }

        alert('See you next time!');
    }
    
    showMainMenuOptions() {
        return prompt(`
        0) Terminate
        1) Create a recipe
        2) View a recipe
        3) Display recipes
        4) Remove a recipe
        `);
        
    }

    showRecipeMenuOptions(recipeInfo) {
        return prompt(`
        1) Add ingredient
        2) Remove ingredient
       

        ${recipeInfo}
        `);
    }

    displayRecipes() {
        let recipeString = '';
        for (let i = 0; i < this.recipes.length; i++) {
            recipeString =+ i + ') ' + this.recipes[i].name + ' \n'
        }

        alert(recipeString);

    }

    createRecipe() {
        let name = prompt('Enter recipe name:');
        this.recipes.push(new Recipe(name));

    }

    viewRecipe() {
        let index = prompt('Enter the index of the recipe you want to see:');
        if (index > -1 && index < this.recipes.length) {
            this.selectedRecipe = this.recipes[index];
            let description = 'Recipe Name: ' + this.selectedRecipe.name + '\n';

            for (let i = 0; i < this.selectedRecipe.ingredient.length; i++) {
                description += i + ') ' + this.selectedRecipe.ingredient[i].name + '\n';

            }

            let selection = this.showRecipeMenuOptions(description);
            switch (selection) {
                case `1`:
                    this.addIngredient();
                    break;
                case`2`:
                this.removeIngredient();

            }

        }

    }
    
    removeRecipe() {
        let index = prompt('')
        if (index > -1 && index < this.recipes.length) {
            this.recipes.splice(index, 1);

        }

    }

    addIngredient(){
        let name = prompt('Enter Name:');
        this.selectedRecipe.ingredient.push(new Ingredients(name));

    }

    removeIngredient() {
        let index = prompt('Enter the index of ingredient you want to remove:');
        if (index > -1 && index < this.selectedRecipe.ingredient.length) {
            this.selectedRecipe.ingredient.splice(index, 1);

        }

    }
    
}

let menu = new Menu();
menu.start();