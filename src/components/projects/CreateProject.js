import React, { Component } from 'react';
import {connect,} from 'react-redux';
import {bindActionCreators} from 'redux';
import {createProject} from '../../store/actions/projectActions';

class CreateProject extends Component {

    state={
        title:'',
        content:'',
    }

    handleChange=(e)=>{
        console.log(e);
        this.setState({
            [e.target.id]:e.target.value,
        })
    }

    handleSubmit =(e)=>{
        e.preventDefault();
        console.log(this.state);
        console.log(this.props);
        
        this.props.createProject(this.state);
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create New Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/> 
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea  id="content"  className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>                
            </div>
        )
    }
}

// const mapStateToProps=(state)=>{
//     return {
//         state,
//     }
// }
const mapDispatchToProps=(dispatch)=>{
    return {
        createProject:(project)=>{dispatch(createProject(project))},
        // actions:bindActionCreators(
        //         Object.assign({},{
        //             createProject,
        //         }),
        //         dispatch
        //         )
    }
}

export default connect(null, mapDispatchToProps)(CreateProject);