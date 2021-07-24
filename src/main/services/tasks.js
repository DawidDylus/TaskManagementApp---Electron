
export const GetTasks = () => {
    
    try {

        const data = [
            {
                id: 1,
                name: "shit",
                description: "clean it upsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss sssssssssssssssssssssssssssssssssssssssssssssssssssss",
                status: 'todo',  
                day: 'monday'             
            },
            {
                id: 2,
                name: "hey",
                description: "wave",
                status: 'completed',
                day: 'friday'
            }           
        ];
        
        return data;

    }
    catch {
        console.log("Could not load characters!");
    }


}