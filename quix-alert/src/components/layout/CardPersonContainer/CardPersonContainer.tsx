import React from "react";

import CardPersonContainer from "../../../interfaces/CardPersonContainer";

import { getFirebaseAppUserById } from "../../../api/firebaseUsers";

import { useQuery } from "react-query";

import {useAuth} from "../../../pages/LoginPage/AuthProvider";

import "./styles.css"

function CardPersonContainer(Props: CardPersonContainer) {
  const { getTokens } = useAuth();

  const { data: requesterResponse, isLoading: isLoadingRequester } = useQuery(
    ["requester", Props.requesterId],
    () => getFirebaseAppUserById(getTokens(), Props.requesterId),
  );

  if (isLoadingRequester) {
    return <div>Carregando...</div>
  }

  return (
    <div className="card-person-container">
      <img className="card-person-photo" src={ requesterResponse.picturePath } alt="person-photo" />
      <div className="card-person-role-and-name">
        <p className="card-person-role">Solicitante:</p>
        <p className="card-person-name">{ Props.requesterName }</p>
      </div>
    </div>
  );
}

export default CardPersonContainer;