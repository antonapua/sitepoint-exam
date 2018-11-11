import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import CounterList from './components/CounterList/CounterList';
import axios from 'axios'

class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
            newListName: '',
            list: []
        }

        
      
     }

    

    componentDidMount() {
        axios.get('http://localhost:3000/api/v1/counters')
        .then( (response)  => {
            this.setState({list:response.data});
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    
    // watch name updates
    handleNameChange = (event) => {
        const name = event.target.value ;
        this.setState({
            newListName: name
        });
    }

    // push update to server and update list with new names
    handleCreate = (event) => {
        const list = this.state.list.slice();
        const name = this.state.newListName;
        

        axios({method:'post',url:'http://localhost:3000/api/v1/counter',data:{title:name}})
        .then(response => {
            this.setState(this.state.list = response.data);
        }).catch(function(error){
            console.log(error);
        });
    }

    
    handleItemDelete = (listIndex) => {
        const list = this.state.list;
        const removeId = list[listIndex].id;

        list.splice(listIndex,1);
        this.setState({list:list});

        axios({method:'delete',url:'http://localhost:3000/api/v1/counter',data:{id:removeId}})
        .then(response => {
            this.setState(this.state.list = response.data);
        }).catch(function(error){
            console.log(error);
        });

    }
    


    handleCounterUpdate = (listIndex,action) => {
        const list = this.state.list;
        const updateId = list[listIndex].id;
        if(action == 'inc'){
            list[listIndex].count ++;
        }

        if(action == 'dec'){
            list[listIndex].count --;
        }

       
        this.setState({list:list});

        
        axios({method:'post',url:'http://localhost:3000/api/v1/counter/'+action,data:{id:updateId}})
        .then(response => {
        }).catch(function(error){
            console.log(error);
        });
    }

    render(){
        return(
            <div className="sp-app">
                <Layout click={this.handleCreate} change={this.handleNameChange}>
                    <CounterList 
                        list={this.state.list} 
                        delete={this.handleItemDelete} 
                        counter={this.handleCounterUpdate}
                    />
                </Layout>
            </div>
        );
    }
}

export default App;