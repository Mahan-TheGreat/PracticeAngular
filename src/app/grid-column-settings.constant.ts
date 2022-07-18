export default class GridColumnSettings{
    constructor(){

    }
    static StoreDispatchList = [
          {headerName:"Name", field:"name"},
          {headerName:"Quantity", field:"quantity"},
          {headerName:"Available", field:"available"},
          {headerName:"Actions",
          cellRenderer:GridColumnSettings.ButtonRenderer,
          minWidth:350}

    ]

    static ButtonRenderer(){
        let templateHtml = `<a grid-action="dispatchItems">Dispatch</a>
        <a grid-action="viewItems"> View</a> `
        return templateHtml;
    }
}