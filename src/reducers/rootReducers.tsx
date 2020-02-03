
export const initState={
count:0,

    chartData:{

        labels : ["2012","2013","2014","2015","2016","2017"],
        datasets : [
            {
                backgroundColor  : "rgba(172,194,132,0.4)",
                borderColor : "#fff",
                scaleFontColor: 'red',
                pointBackgroundColor : "white",
                pointBorderColor : "white",
                Color: "white",
                data : [203,156,99,251,305,247]
            }
        ]
    },
    isOpen1: false,
    isOpen2: false,
    isOpen3: false,
    isOpen4: false,
    isOpen5: false,
    isOpen6: false,
    isOpen7: false

}

export const rootReducers=(state =initState, action:any)=>
{
    if (action.type === "TOGGLECLICK")
    {

        let collapse = "isOpen" + action.payload;


        if (action.payload===1)
        {
            return {
                ...state,
                isOpen1: !state.isOpen1}
        }
       else if (action.payload===2)
        {
            return {
                ...state,
                isOpen2: !state.isOpen2}
        }
        else if (action.payload===3)
        {
            return {
                ...state,
                isOpen3: !state.isOpen3}
        }
        else if (action.payload===4)
        {
            return {
                ...state,
                isOpen4: !state.isOpen4}
        }
        else if (action.payload===5)
        {
            return {
                ...state,
                isOpen5: !state.isOpen5}
        }
        else if (action.payload===6)
        {
            return {
                ...state,
                isOpen6: !state.isOpen6}
        }
        else if (action.payload===7)
        {
            return {
                ...state,
                isOpen7: !state.isOpen7}
        }
    }



return state;
}

export  default  rootReducers