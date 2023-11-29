import React from "react";

import { useAuth } from "../../../pages/LoginPage/AuthProvider";

import { useQuery } from "react-query";

import { getFirebaseAppUserById } from "../../../api/firebaseUsers";

import "./styles.css"

function RequesterContainer(Props: RequesterContainer) {
  const { getTokens } = useAuth();

  const { data: requesterResponse, isLoading: isLoadingRequester } = useQuery(
    ["requester", Props.userId],
    () => getFirebaseAppUserById(getTokens(), Props.userId),
  );

  if (isLoadingRequester) {
    return <div>Carregando...</div>
  }
  
  return (
    <div className="requester-container">
        <img className="requester-photo" src={ requesterResponse.picturePath } alt="requester-photo" />
        <div className="requester-role-and-name">
          <p className="requester-role">Solicitante:</p>
          <p className="requester-name">{Props.requesterName}</p>
        </div>
    </div>
  );
}

export default RequesterContainer;