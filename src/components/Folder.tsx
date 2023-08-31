import { useState } from "react";
import { IFolder } from "../types/types";

const Folder = ({ explorer , handleInsertNode}: IFolder) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setshowInput] = useState({
    visible: false,
    isFolder: null,
  });
  const handleNewFolder = (e: any, isFolder: any) => {
    e.stopPropagation();
    setExpand(true)
    setshowInput({
      visible: !showInput.visible,
      isFolder: isFolder,
    });
  };
  const onAddFolderHandler = (e:any)=>{
    if(e.keyCode === 13 && e.target.value.length!=0){ // 13 is enter
      // console.log('Value  ')
      // logic to add a new folder 

      handleInsertNode(explorer.id, e.target.value,  showInput.isFolder!);
      
      setshowInput({
        visible:false ,
        isFolder : null
      })
      //  console.log(e.target.value)
    }

  }

  return (
    <>
      {explorer.isFolder ? (
        <div style={{ marginTop: 5 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              cursor: "pointer",
            }}
          >
            <span
              onClick={() => setExpand(!expand)}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "5px",
              }}
            >
              📁 {explorer.name}
            </span>
            <div>
              <button onClick={(e) => handleNewFolder(e, true)}>
                Folder +{" "}
              </button>
              <button onClick={(e) => handleNewFolder(e, false)}>
                File +{" "}
              </button>
            </div>

          </div>
            <div
              style={{
                display: showInput.visible ? "block" : "none",
                justifyContent :"space-around",
                flexDirection: "row",
                textAlign : "start"

              }}
            >
              
              <span>{showInput.isFolder ? "📁" : "🗎"}</span>
              <input type="text"
                onKeyDown = {(e)=>onAddFolderHandler(e)}
                style={{margin:"20px 4px"}} 
                autoFocus
                placeholder={`Enter ${showInput.isFolder?"Folder Name":"File Name"}`}
                onBlur={()=>setshowInput({...showInput, visible: false})}
              />
            
            </div>
          {/* Recursively Displaying all the  Folder */}
          <div
            style={{ display: expand ? "block" : "none", marginLeft: "30px" }}
          >
            {explorer.items.map((exp: any) => {
              return <Folder handleInsertNode={handleInsertNode} explorer={exp} />;
            })}
          </div>
        </div>
      ) : (
        <div style={{ marginTop: 5 }}>
          <div style={{ display: "flex" }}>
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "5px",
              }}
            >
              🗎{explorer.name}
            </span>
          </div>
          {/* Recursively Displaying all the  Folder */}
          <div style={{ marginLeft: "30px" }}>
            {explorer.items.map((exp: any) => {
              return <Folder handleInsertNode={handleInsertNode} explorer={exp} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Folder;
