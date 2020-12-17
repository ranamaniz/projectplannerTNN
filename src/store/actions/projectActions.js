export const ACTIONS={
    CREATE_PROJECT:'CREATE_PROJECT',
    CREATE_PROJECT_ERROR:'CREATE_PROJECT_ERROR',
}

// export const createProject=(project)=>{
//     return {
//         type:'ADD_PROJECT',
//         project:project,
//     }
// } 

export const createProject=(project)=>{
    return(dispatch,getState, {getFirebase, getFirestore})=>{
        //make async call to database
        const firestore=getFirestore();

        firestore.collection('projects').add({
            ...project,
            authorFirstName:'Net',
            authorLastName:'Ninja',
            authorId:12345,
            createdAt: new Date(),
        }).then(()=>{
            dispatch({
                type:ACTIONS.CREATE_PROJECT,
                project:project,
            })
        }).catch((err)=>{
            dispatch({
                type:ACTIONS.CREATE_PROJECT_ERROR,
                err,
            })
        })                
    }
}