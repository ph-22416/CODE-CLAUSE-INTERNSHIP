let recipes = [];

function showRecipeForm() {
    document.getElementById('recipe-form').style.display = 'block';
}

function addRecipe() {
    const name = document.getElementById('recipe-name').value;
    const ingredients = document.getElementById('recipe-ingredients').value;
    const imageUrl = document.getElementById('recipe-image').value;

    const recipe = {
        id: Date.now(),
        name: name,
        ingredients: ingredients,
        imageUrl: imageUrl
    };

    recipes.push(recipe);
    displayRecipes();
    document.getElementById('recipeForm').reset();
    document.getElementById('recipe-form').style.display = 'none';
}

function displayRecipes() {
    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = '';
    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';

        const recipeName = document.createElement('h3');
        recipeName.textContent = recipe.name;

        const recipeIngredients = document.createElement('p');
        recipeIngredients.textContent = `Ingredients: ${recipe.ingredients}`;

        const recipeImage = document.createElement('img');
        recipeImage.src = recipe.imageUrl;
        recipeImage.alt = recipe.name;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => editRecipe(recipe.id);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteRecipe(recipe.id);

        recipeCard.appendChild(recipeName);
        recipeCard.appendChild(recipeIngredients);
        recipeCard.appendChild(recipeImage);
        recipeCard.appendChild(editButton);
        recipeCard.appendChild(deleteButton);

        recipeList.appendChild(recipeCard);
    });
}

function editRecipe(id) {
    const recipe = recipes.find(r => r.id === id);
    if (recipe) {
        document.getElementById('recipe-name').value = recipe.name;
        document.getElementById('recipe-ingredients').value = recipe.ingredients;
        document.getElementById('recipe-image').value = recipe.imageUrl;

        document.getElementById('recipe-form').style.display = 'block';

        recipes = recipes.filter(r => r.id !== id);
    }
}

function deleteRecipe(id) {
    recipes = recipes.filter(r => r.id !== id);
    displayRecipes();
}
