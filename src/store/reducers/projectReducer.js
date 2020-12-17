import {ACTIONS} from '../actions/projectActions';

const initState={
    projects:[
        {id:'1',title:'hello prach', content:'everyone love someone'},
        {id:'2',title:'prach prach ', content:'everyone love'},
        {id:'3',title:'prach gone', content:'everyone prach someone'},
    ]
}

const projectReducer = (state=initState,action)=>{
    switch (action.type){
        case ACTIONS.CREATE_PROJECT:
            console.log('created project', action.project);
            return state;
        case ACTIONS.CREATE_PROJECT_ERROR:
            console.log('create project error', action.err);
            return state;
        default:
            return state;
    }

    
}


// watch commment in the video
export default projectReducer;