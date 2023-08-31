import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Folder from './components/Folder'
import explorer from './data/FolderData';
import { useTraverseTree } from './hooks/useTraverseTree';
function App() {
  const [explorerData, setExplorer] = useState<any>(explorer);
  
  // console.log(explorerData)

  const {insertNode}  = useTraverseTree();
  
  const handleInsertNode = (folderId: string, item: string , isFolder:boolean)=>{
    const finalTree = insertNode(explorerData , folderId , item , isFolder);
    // console.log("FINAL TREE");
    // console.log(finalTree)
    setExplorer(finalTree);
  }

  return (
   <div style={{display:"flex",boxShadow:"1px 1px 10px 10px gray ",padding:"20px" , borderRadius:"20px"}}>
   <Folder  handleInsertNode = {handleInsertNode} explorer={explorerData}/>
   </div>
  )
}

export default App
