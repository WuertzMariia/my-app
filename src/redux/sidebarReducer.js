


let initialState = {
    sideb: [
        { path: "/profile", name: "Profile" },
        { path: "/messages", name: "Messages" },
        { path: "/news", name: "News" },
        { path: "/music", name: "Music" },
        { path: "/settings", name: "Settings" },
        { path: "/users", name: "Find more friends" }
    ],

    friends: [
        { src: "https://trikky.ru/wp-content/blogs.dir/1/files/2020/03/29/avatarka.jpg", name: "Maria" },
        { src: "https://trikky.ru/wp-content/blogs.dir/1/files/2020/03/29/avatarka.jpg", name: "Julia" },
        { src: "https://trikky.ru/wp-content/blogs.dir/1/files/2020/03/29/avatarka.jpg", name: "Katja" }

    ]
}; 

let sidebarReducer =(state = initialState, action) => {
    return state;
}

export default sidebarReducer; 