interface Game {
    id: string;
    title: string;
    platform: string[];
}

interface Author {
    id: string;
    name: string;
    verified: boolean;
}

interface Review {
    id: string;
    rating: number;
    content: string;
    author_id: string;
    game_id: string;
}

const games: Game[] = [
    {
        id: "1",
        title: "GTA V",
        platform: ["PC", "XBOX", "PS5", "Nintendo Switch", "Steam Deck"],
    },
    {
        id: "2",
        title: "FIFA 22",
        platform: ["PC", "XBOX", "PS5", "Nintendo Switch"],
    },
    {
        id: "3",
        title: "The Witcher 3: Wild Hunt",
        platform: ["PC", "XBOX", "PS4", "Nintendo Switch"],
    },
    {
        id: "4",
        title: "Call of Duty: Warzone",
        platform: ["PC", "XBOX", "PS5"],
    },
    {
        id: "5",
        title: "Minecraft",
        platform: ["PC", "XBOX", "PS4", "Nintendo Switch"],
    },
    {
        id: "6",
        title: "Assassin's Creed Valhalla",
        platform: ["PC", "XBOX", "PS5", "PS4"],
    },
    {
        id: "7",
        title: "Fortnite",
        platform: ["PC", "XBOX", "PS5", "Nintendo Switch"],
    },
    { id: "8", title: "Cyberpunk 2077", platform: ["PC", "XBOX", "PS5"] },
    {
        id: "9",
        title: "Red Dead Redemption 2",
        platform: ["PC", "XBOX", "PS4", "PS5"],
    },
    { id: "10", title: "Overwatch", platform: ["PC", "XBOX", "PS4"] },
    { id: "11", title: "Super Mario Odyssey", platform: ["Nintendo Switch"] },
    { id: "12", title: "Halo Infinite", platform: ["PC", "XBOX"] },
    { id: "13", title: "Apex Legends", platform: ["PC", "XBOX", "PS4", "PS5"] },
    {
        id: "14",
        title: "Animal Crossing: New Horizons",
        platform: ["Nintendo Switch"],
    },
    { id: "15", title: "Doom Eternal", platform: ["PC", "XBOX", "PS4"] },
    {
        id: "16",
        title: "Rainbow Six Siege",
        platform: ["PC", "XBOX", "PS4", "PS5"],
    },
];

const authors: Author[] = [
    { id: "1", name: "Ajay", verified: true },
    { id: "2", name: "Deol", verified: false },
    { id: "3", name: "Sara", verified: true },
    { id: "4", name: "John", verified: false },
    { id: "5", name: "Shreedhar", verified: false },
];

const reviews: Review[] = [
    {
        id: "1",
        rating: 9,
        content: "This is a review",
        author_id: "3",
        game_id: "10",
    },
    {
        id: "2",
        rating: 8,
        content: "Great game, loved the graphics",
        author_id: "1",
        game_id: "1",
    },
    {
        id: "3",
        rating: 7,
        content: "Needs improvement in multiplayer",
        author_id: "2",
        game_id: "4",
    },
    {
        id: "4",
        rating: 10,
        content: "Perfect open-world experience",
        author_id: "4",
        game_id: "6",
    },
    {
        id: "5",
        rating: 6,
        content: "Too many bugs, but potential",
        author_id: "3",
        game_id: "8",
    },
    {
        id: "6",
        rating: 5,
        content: "Best multiplayer game ever!",
        author_id: "1",
        game_id: "13",
    },
    {
        id: "7",
        rating: 6,
        content: "Interesting storyline, could be longer",
        author_id: "4",
        game_id: "3",
    },
    {
        id: "8",
        rating: 6,
        content: "Great for casual gaming sessions",
        author_id: "2",
        game_id: "14",
    },
    {
        id: "9",
        rating: 9,
        content: "Awesome graphics and gameplay",
        author_id: "3",
        game_id: "5",
    },
    {
        id: "10",
        rating: 8,
        content: "Enjoyable, but repetitive missions",
        author_id: "1",
        game_id: "12",
    },
    {
        id: "11",
        rating: 7,
        content: "Solid performance, few glitches",
        author_id: "4",
        game_id: "11",
    },
    {
        id: "12",
        rating: 9,
        content: "Must-play for strategy fans",
        author_id: "5",
        game_id: "16",
    },
    {
        id: "13",
        rating: 6,
        content: "Disappointing sequel, lacks innovation",
        author_id: "3",
        game_id: "9",
    },
    {
        id: "14",
        rating: 8,
        content: "Great co-op experience",
        author_id: "1",
        game_id: "15",
    },
    {
        id: "15",
        rating: 7,
        content: "Good, but not groundbreaking",
        author_id: "4",
        game_id: "7",
    },
    {
        id: "16",
        rating: 9,
        content: "Captivating story and characters",
        author_id: "2",
        game_id: "2",
    },
    {
        id: "17",
        rating: 8,
        content: "Solid mechanics, enjoyable multiplayer",
        author_id: "3",
        game_id: "14",
    },
    {
        id: "18",
        rating: 7,
        content: "Unique art style, challenging puzzles",
        author_id: "1",
        game_id: "5",
    },
    {
        id: "19",
        rating: 9,
        content: "A masterpiece in gaming history",
        author_id: "4",
        game_id: "1",
    },
    {
        id: "20",
        rating: 8,
        content: "Great soundtrack, immersive world",
        author_id: "2",
        game_id: "6",
    },
    {
        id: "21",
        rating: 6,
        content: "Too many microtransactions",
        author_id: "3",
        game_id: "3",
    },
    {
        id: "22",
        rating: 9,
        content: "Best in the series, a must-play",
        author_id: "1",
        game_id: "9",
    },
    {
        id: "23",
        rating: 8,
        content: "Well-balanced gameplay, fun online",
        author_id: "4",
        game_id: "13",
    },
    {
        id: "24",
        rating: 7,
        content: "Solid RPG elements, engaging quests",
        author_id: "2",
        game_id: "10",
    },
    {
        id: "25",
        rating: 9,
        content: "Incredible attention to detail",
        author_id: "3",
        game_id: "7",
    },
    {
        id: "26",
        rating: 8,
        content: "Epic boss battles, great level design",
        author_id: "1",
        game_id: "15",
    },
    {
        id: "27",
        rating: 7,
        content: "Decent storyline, needs better graphics",
        author_id: "4",
        game_id: "12",
    },
    {
        id: "28",
        rating: 9,
        content: "Hours of fun, addictive gameplay",
        author_id: "2",
        game_id: "8",
    },
    {
        id: "29",
        rating: 8,
        content: "Good open-world exploration",
        author_id: "3",
        game_id: "16",
    },
    {
        id: "30",
        rating: 7,
        content: "Solid multiplayer experience",
        author_id: "1",
        game_id: "11",
    },
    {
        id: "31",
        rating: 9,
        content: "Beautiful graphics, engaging story",
        author_id: "4",
        game_id: "4",
    },
    {
        id: "32",
        rating: 8,
        content: "Intense action, well-designed levels",
        author_id: "2",
        game_id: "2",
    },
    {
        id: "33",
        rating: 7,
        content: "Interesting concept, but lacks polish",
        author_id: "3",
        game_id: "15",
    },
    {
        id: "34",
        rating: 9,
        content: "A masterpiece in storytelling",
        author_id: "1",
        game_id: "1",
    },
    {
        id: "35",
        rating: 8,
        content: "Enjoyable co-op, challenging puzzles",
        author_id: "4",
        game_id: "5",
    },
    {
        id: "36",
        rating: 7,
        content: "Good but overhyped",
        author_id: "2",
        game_id: "9",
    },
    {
        id: "37",
        rating: 9,
        content: "Addictive gameplay, great graphics",
        author_id: "3",
        game_id: "14",
    },
    {
        id: "38",
        rating: 8,
        content: "Solid mechanics, engaging storyline",
        author_id: "1",
        game_id: "6",
    },
    {
        id: "39",
        rating: 7,
        content: "Innovative gameplay, needs better graphics",
        author_id: "4",
        game_id: "3",
    },
    {
        id: "40",
        rating: 9,
        content: "Best game in the genre",
        author_id: "2",
        game_id: "7",
    },
    {
        id: "41",
        rating: 8,
        content: "Immersive world, memorable characters",
        author_id: "3",
        game_id: "12",
    },
    {
        id: "42",
        rating: 7,
        content: "Decent gameplay, lackluster graphics",
        author_id: "1",
        game_id: "10",
    },
    {
        id: "43",
        rating: 9,
        content: "Mind-blowing visuals, epic battles",
        author_id: "4",
        game_id: "13",
    },
    {
        id: "44",
        rating: 8,
        content: "Good, but not groundbreaking",
        author_id: "2",
        game_id: "11",
    },
    {
        id: "45",
        rating: 7,
        content: "Interesting story, enjoyable gameplay",
        author_id: "3",
        game_id: "8",
    },
    {
        id: "46",
        rating: 9,
        content: "Perfect blend of action and strategy",
        author_id: "1",
        game_id: "16",
    },
    {
        id: "47",
        rating: 8,
        content: "Solid RPG experience, great quests",
        author_id: "4",
        game_id: "2",
    },
    {
        id: "48",
        rating: 7,
        content: "Needs more variety in missions",
        author_id: "2",
        game_id: "15",
    },
    {
        id: "49",
        rating: 9,
        content: "Engaging story, memorable characters",
        author_id: "3",
        game_id: "4",
    },
    {
        id: "50",
        rating: 8,
        content: "Great soundtrack, immersive atmosphere",
        author_id: "1",
        game_id: "14",
    },
];

export default { games, authors, reviews };
