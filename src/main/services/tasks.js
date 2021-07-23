
export const GetTasks = () => {
    
    try {

        const data = [
            {
                id: 1,
                taskName: "shit",
                task: "clean it upsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss sssssssssssssssssssssssssssssssssssssssssssssssssssss",
                status: 'todo',
                index: 1
            },
            {
                id: 2,
                taskName: "hey",
                task: "wave",
                status: 'todo',
                index: 2
            }           
        ];
        
        return data;

    }
    catch {
        console.log("Could not load characters!");
    }


}