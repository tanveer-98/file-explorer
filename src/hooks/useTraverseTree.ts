import { IExplorer } from "../types/types";
// import { useState } from "react";
export const useTraverseTree = () => {
  // const [showAlert, setAlert] = useState(false);

  function insertNode(
    tree: any,
    folderId: any,
    item: string,
    isFolder: boolean
  ) {
    // setAlert(false);
    // console.log("TREE ID : " +typeof  tree.id);
    // console.log("FOLDER ID : " +typeof folderId);

    // if(tree.items.length== 0  || !tree.isFolder) return tree ;
    // insert node is a functions that returns a new node object
    if (tree.id == folderId && tree.isFolder) {

      if (
        tree.items.find(
          (child: IExplorer) => child.name == item && child.isFolder == isFolder
        ) !== undefined
      ) {
        // if(showAlert == false)
        if (isFolder) alert("FOLDER NAME ALREADY EXISTS");
        else alert("FILE NAME ALREADY EXISTS");
        // setTimeout(()=>{
        //     setAlert(true)
        // },1000)
        return tree;
      }
      tree.items.unshift({
        id: new Date().getTime().toString(),
        name: item,
        isFolder: isFolder,
        items: [],
      });
      return tree;
    }

    // initially there will be the root
    for (let i = 0; i < tree.items.length; i++) {
      tree.items[i] = insertNode(tree.items[i], folderId, item, isFolder);
    }

    return tree;
  }

  return { insertNode }; // return the function to generate a new nod
};
