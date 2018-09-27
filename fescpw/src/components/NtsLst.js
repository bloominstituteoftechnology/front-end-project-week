import React from 'react';
import styled from 'styled-components';
import Divider from '@material-ui/core/Divider';

const PgeCtnr = styled.div`
    width: 100%;
    margin: auto;
`;

const NtsLstCtnr = styled.div`
    width: 65%;
    margin: 0 auto;
`;

const NtsLstHdr = styled.h1`
    margin: 2%;
    font-size: 2rem;
    font-weight: 900;
`;

const NtsIdvCtnr = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const NtsIdvCrd = styled.div`
    width: 28%;
    height: 40vh;
    padding: 3%;
    margin: 2%;
    border: 1px solid lightgrey;
    overflow: scroll;
    -ms-overflow-style: none;  // IE 10+
    overflow: -moz-scrollbars-none;

    ::-webkit-scrollbar { 
        display: none;  // Safari and Chrome
    }
`;

const NtsIdvHdr = styled.h2`
    font-size: 1.6rem;
    font-weight: 700;
`;

const NtsIdvCnt = styled.p`
    font-size: 1.2rem;
    line-height: 2rem;
`;

const NtsIdvTgs = styled.small`
    font-size: .6rem;
    color: #e5e5e5;
`;

 const NtsLst = (props) => {
     if (!props.nts_arr || !props.nts_arr.length) {
         return <h1>Loading...</h1>
     }
  return (
      <PgeCtnr>
        <NtsLstCtnr>
            <NtsLstHdr>Your Notes:</NtsLstHdr>
            <NtsIdvCtnr>
                {props.nts_arr.map(ntsidv => (
                    <NtsIdvCrd key={ntsidv._id}>
                        <NtsIdvHdr onClick={(event) => {
                            event.preventDefault();
                            props.ntssgr(ntsidv._id);
                            props.history.push(`/nts/${ntsidv._id}`);
                            }}>{ntsidv.title}</NtsIdvHdr>
                            <Divider style={{height: 2, margin: 8}} />
                        <NtsIdvCnt>{ntsidv.textBody}</NtsIdvCnt>
                        <NtsIdvTgs>{ntsidv.tags}</NtsIdvTgs>
                    </NtsIdvCrd>
                ))}
            </NtsIdvCtnr>
        </NtsLstCtnr>
      </PgeCtnr>
  )
}

export default NtsLst;