//PROJECTS ARRAY
const projects = [
    {
        title: "Study Assistant App",
        description: "Study Assistant App is a JavaFX desktop application" +
            " for creating and managing flashcard decks, studying with type-in quizzes, " +
            "and tracking session progress - all backed by a MySQL database.",
        visitLink: "https://github.com/DarkShadsi/studybuddy.git",
        images: [
            "assets/images/projects/SAA-1.png",
            "assets/images/projects/SAA-2.png",
            "assets/images/projects/SAA-3.png"
        ],
        tags: ["Desktop", "Java"]
    },
    {
        title: "Hack Quest",
        description: "A Java-based educational game that tests programming " +
            "knowledge through interactive quizzes.",
        visitLink: "https://github.com/DarkShadsi/Hack-Quest-version-2.git",
        images: [
            "assets/images/projects/HQ-1.png",
            "assets/images/projects/HQ-2.png",
            "assets/images/projects/HQ-3.png"
        ],
        tags: ["Desktop", "Java"]
    },
    {
        title: "Maze of Missteps",
        description: "In every turn lies another mistake. A java maze-game " +
            "where your primary goal is to collect keys and escape the " +
            "maze before the monsters get you.",
        visitLink: "https://github.com/DarkShadsi/Maze-of-Missteps.git",
        images: [
            "assets/images/projects/MoM-1.png",
            "assets/images/projects/MoM-2.png",
            "assets/images/projects/MoM-3.png"
        ],
        tags: ["Desktop", "Java"]
    },
    {
        title: "Snake Game",
        description: "A simple Java Snake game testing out my skills " +
            "on OOP and Java threads and Paint components.",
        visitLink: "https://github.com/DarkShadsi/Snake-Game.git",
        images: [
            "assets/images/projects/SnakeGame-1.png",
            "assets/images/projects/SnakeGame-2.png",
            "assets/images/projects/SnakeGame-3.png"
        ],
        tags: ["Desktop", "Java"]
    }
];

function createProjectCard(project) {
    const card = document.createElement("div");
    card.className = "project-card";

    if (project.images && project.images.length > 0) {
        const image = document.createElement("img");
        image.src = project.images[0];
        image.alt = `${project.title} preview`;
        image.className = "project-card-image";
        image.loading = "lazy";
        card.appendChild(image);
    }

    const title = document.createElement("h3")
    title.textContent = project.title;

    const tagList = document.createElement("div");
    tagList.className = "tags";
    project.tags.forEach((tag) => {
        const badge = document.createElement("span");
        badge.className = "tag";
        badge.textContent = tag;
        tagList.appendChild(badge);
    });

    card.append(title, tagList);
    return card;
}

function renderProjects(list) {
    const container = document.getElementById("project-list-container");
    container.innerHTML = "";
    list.forEach((project) => container.append(createProjectCard(project)));
}

document.addEventListener("DOMContentLoaded", () => {
    renderProjects(projects);
})
