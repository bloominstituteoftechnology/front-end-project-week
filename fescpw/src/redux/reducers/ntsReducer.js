import { 
    NTS_FTH_IP, 
    NTS_FTH_SCS, 
    NTS_FTH_FLR,
    NTS_SGR_IP,
    NTS_SGR_SCS,
    NTS_SGR_FLR,
    NTS_CRT_IP,
    NTS_CRT_SCS,
    NTS_CRT_FLR,
    NTS_GPE_IP,
    NTS_EDT_IP,
    NTS_EDT_SCS,
    NTS_EDT_FLR,
    NTS_RMV_IP,
    NTS_RMV_SCS,
    NTS_RMV_FLR,
} from '../actions';

const initialState = {
    nts_fthg: false,
    nts_fthd: false,
    nts_crtg: false,
    nts_crtd: false,
    nts_edtg: false,
    nts_edtd: false,
    nts_rmvg: false,
    nts_rmvd: false,
    nts_arr: [],
    nts_idv: {},
    nts_tbu: null,
    err: null
};

export const ntsReducer = (state = initialState, action) => {
    switch(action.type) {
        case NTS_FTH_IP:
            return { ...state, nts_fthg: true };
        case NTS_FTH_SCS:
            return { ...state, nts_fthg: false, nts_fthd: true, nts_arr: action.payload };
        case NTS_FTH_FLR:
            return { ...state, nts_fthg: false, err: action.payload };
        case NTS_SGR_IP:
            return { ...state, nts_fthg: true };
        case NTS_SGR_SCS:
            return { ...state, nts_fthg: false, nts_fthd: true, nts_idv: action.payload };
        case NTS_SGR_FLR:
            return { ...state, nts_fthg: false, err: action.payload };
        case NTS_CRT_IP:
            return { ...state, nts_crtg: true };
        case NTS_CRT_SCS:
            return { ...state, nts_crtg: false, nts_crtd: true, nts_arr: action.payload };
        case NTS_CRT_FLR:
            return { ...state, nts_crtg: false, err: action.payload };
        case NTS_GPE_IP:
            const ntsidv = state.nts_arr.find(ntsidv => ntsidv._id === action.payload);
            return { ...state, nts_tbu: ntsidv ? ntsidv : null };
        case NTS_EDT_IP:
            return { ...state, nts_edtg: true };
        case NTS_EDT_SCS:
            return { ...state, nts_edtg: false, nts_edtd: true, nts_arr: action.payload };
        case NTS_EDT_FLR:
            return { ...state, nts_edtg: false, err: action.payload };
        case NTS_RMV_IP:
            return { ...state, nts_rmvg: true };
        case NTS_RMV_SCS:
            return { ...state, nts_rmvg: false, nts_rmvd: true, nts_arr: action.payload };
        case NTS_RMV_FLR:
            return { ...state, nts_rmvg: false, err: action.payload };
        default:
            return state;
    }
}