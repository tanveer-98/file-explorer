export interface IExplorer{
    id : string ; 
    name : string; 
    isFolder : boolean ; 
    items : [any]
  }
  export interface IFolder{
    explorer : IExplorer;
    handleInsertNode : (folderId : string , item : string , isFolder : boolean)=> any
  }