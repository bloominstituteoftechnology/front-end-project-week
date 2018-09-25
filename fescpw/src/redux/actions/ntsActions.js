import axios from 'axios';

export const NTS_FTH_IP = "NTS_FTH_IP";
export const NTS_FTH_SCS = "NTS_FTH_SCS";
export const NTS_FTH_FLR = "NTS_FTH_FLR";
export const NTS_SGR_IP = "NTS_SGR_IP";
export const NTS_SGR_SCS = "NTS_SGR_SCS";
export const NTS_SGR_FLR = "NTS_SGR_FLR";
export const NTS_CRT_IP = "NTS_CRT_IP";
export const NTS_CRT_SCS = "NTS_CRT_SCS";
export const NTS_CRT_FLR = "NTS_CRT_FLR";
export const NTS_GPE_IP = "NTS_GPE_IP";
export const NTS_EDT_IP = "NTS_EDT_IP";
export const NTS_EDT_SCS = "NTS_EDT_SCS";
export const NTS_EDT_FLR = "NTS_EDT_FLR"
export const NTS_RMV_IP = "NTS_RMV_IP";
export const NTS_RMV_SCS = "NTS_RMV_SCS";
export const NTS_RMV_FLR = "NTS_RMV_FLR";

export const ntsFth = () => dispatch => {
    dispatch({ type: NTS_FTH_IP });
    axios
        .get("https://killer-notes.herokuapp.com/note/get/all")
        .then((response) => {
            dispatch({
                type: NTS_FTH_SCS,
                payload: response.data
            });
        })
        .catch((err) => {
            dispatch({
                type: NTS_FTH_FLR,
                payload: err
            });
        });
};

export const ntsSgr = ntsidf => dispatch => {
    dispatch({ type: NTS_SGR_IP });
    axios
        .get(`https://killer-notes.herokuapp.com/note/get/${ntsidf}`)
        .then((response) => {
            dispatch({
                type: NTS_SGR_SCS,
                payload: response.data
            });
        })
        .catch((err) => {
            dispatch({
                type: NTS_SGR_FLR,
                payload: err
            });
        });
};

export const ntsCrt = ntsidv => dispatch => {
    dispatch({ type: NTS_CRT_IP });
    axios
        .post("https://killer-notes.herokuapp.com/note/create", ntsidv)
        .then((response) => {
            dispatch({
                type: NTS_CRT_SCS,
                payload: response.data
            });
        })
        .catch((err) => {
            dispatch({
                type: NTS_CRT_FLR,
                payload: err
            });
        });
};

export const ntsGpe = id => {
    return {
        type: NTS_GPE_IP,
        payload: id
    };
};

export const ntsEdt = ntsidv => dispatch => {
    dispatch({ type: NTS_EDT_IP });
    axios
        .put(`https://killer-notes.herokuapp.com/note/edit/${ntsidv._id}`, ntsidv)
        .then((response) => {
            dispatch({
                type: NTS_EDT_SCS,
                payload: response.data
            });
        })
        .catch((err) => {
            dispatch({
                type: NTS_EDT_FLR,
                payload: err
            });
        });
}

export const ntsRmv = ntsidf => dispatch => {
    dispatch({ type: NTS_RMV_IP });
    axios
        .delete(`https://killer-notes.herokuapp.com/note/delete/${ntsidf}`)
        .then((response) => {
            dispatch({
                type: NTS_RMV_SCS,
                payload: response.data
            });
        })
        .catch((err) => {
            dispatch({
                type: NTS_RMV_FLR,
                payload: err
            });
        });
};