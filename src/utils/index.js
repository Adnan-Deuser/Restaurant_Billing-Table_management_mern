export const getRandomBG = () =>{
    const colours=[
        "#f6b100",
        "#2e4a40",
        "#664a04",
        "#f5f5f5",
        "#ababab",
        "#1f1f1f",
        "#383838",
        "#262626",
        "#f5f5f5",
        "#ababab",
        "#f5f5f5",
        "#f5f5f5",
        "#ababab",
        "#f6b100",
        "#262626",
        "#f6b100",
    ];
    colours[Math.floor(Math.random()* colours.length)];
    return "bg-[" + colours + "]";
}