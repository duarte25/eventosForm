import Cabecalho from '@/components/Cabecalho';
import ProjectForm from '../../project/ProjectForm'
import { useHistory } from "react-router-dom";

export default function Index(){
  
    
    function createPost(project) {
        /*project.cost = 0
        project.services = []*/

        fetch('http://localhost:3000/eventos', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
        })
        .catch(err => console.log(err))
    }

    return (
        <>
        <Cabecalho/>
        <ProjectForm handleSubmit={createPost}/>
        </>
    )
}