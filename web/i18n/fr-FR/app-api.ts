const translation = {
  apiServer: 'Serveur API',
  apiKey: 'Clé API',
  status: 'Statut',
  disabled: 'Désactivé',
  ok: 'En Service',
  copy: 'Copier',
  copied: 'Copié',
  play: 'Jouer',
  pause: 'Pause',
  playing: 'Jouant',
  merMaid: {
    rerender: 'Refaire Rerendu',
  },
  never: 'Jamais',
  apiKeyModal: {
    apiSecretKey: 'Clé secrète de l\'API',
    apiSecretKeyTips: 'Pour prévenir l\'abus de l\'API, protégez votre clé API. Évitez de l\'utiliser comme du texte brut dans le code front-end. :)',
    createNewSecretKey: 'Créer une nouvelle clé secrète',
    secretKey: 'Clé Secrète',
    created: 'CRÉÉ',
    lastUsed: 'DERNIÈRE UTILISATION',
    generateTips: 'Gardez cette clé dans un endroit sûr et accessible.',
  },
  actionMsg: {
    deleteConfirmTitle: 'Supprimer cette clé secrète ?',
    deleteConfirmTips: 'Cette action ne peut pas être annulée.',
    ok: 'D\'accord',
  },
  completionMode: {
    title: 'API de l\'application Completion',
    info: 'Pour une génération de texte de haute qualité, telle que des articles, des résumés et des traductions, utilisez l\'API completion-messages avec l\'entrée de l\'utilisateur. La génération de texte repose sur les paramètres du modèle et les modèles de prompt définis dans',
    createCompletionApi: 'Créer un Message de Fin',
    createCompletionApiTip: 'Créez un message de fin pour soutenir le mode question-réponse.',
    inputsTips: '(Facultatif) Fournissez des champs de saisie utilisateur sous forme de paires clé-valeur, correspondant aux variables dans Prompt Eng. La clé est le nom de la variable, la valeur est la valeur du paramètre. Si le type de champ est Sélection, la valeur sou',
    queryTips: 'Contenu du texte saisi par l\'utilisateur.',
    blocking: 'Type de blocage, en attente de l\'exécution pour terminer et renvoyer les résultats. (Les demandes peuvent être interrompues si le processus est long)',
    streaming: 'retours en continu. Mise en œuvre de retours en continu basée sur SSE (Server-Sent Events).',
    messageFeedbackApi: 'Retour de message (j\'aime)',
    messageFeedbackApiTip: 'Évaluez les messages reçus au nom des utilisateurs finaux avec des likes ou des dislikes. Ces données sont visibles sur la page Logs & Annotations et sont utilisées pour le réglage fin des modèles futurs.',
    messageIDTip: 'ID de message',
    ratingTip: 'aimer ou ne pas aimer, null est annuler',
    parametersApi: 'Obtenir des informations sur les paramètres de l\'application',
    parametersApiTip: 'Récupérer les paramètres d\'entrée configurés, y compris les noms de variables, les noms de champs, les types et les valeurs par défaut. Généralement utilisé pour afficher ces champs dans un formulaire ou pour remplir les valeurs par défaut après le charg',
  },
  chatMode: {
    title: 'API de l\'application de chat',
    info: 'Pour des applications conversationnelles polyvalentes utilisant un format Q&R, appelez l\'API de chat-messages pour initier le dialogue. Maintenez les conversations en cours en passant l\'ID de conversation retourné. Les paramètres de réponse et les modèles dépendent des paramètres de',
    createChatApi: 'Créer un message de chat',
    createChatApiTip: 'Créez un nouveau message de conversation ou continuez un dialogue existant.',
    inputsTips: '(Facultatif) Fournir des champs de saisie utilisateur sous forme de paires clé-valeur, correspondant aux variables dans Prompt Eng. La clé est le nom de la variable, la valeur est la valeur du paramètre. Si le type de champ est Sélection, la valeur soumise',
    queryTips: 'Contenu de la question/saisie de l\'utilisateur',
    blocking: 'Type de blocage, en attente de l\'exécution pour terminer et renvoyer les résultats. (Les demandes peuvent être interrompues si le processus est long)',
    streaming: 'retours en continu. Mise en œuvre de retours en continu basée sur SSE (Server-Sent Events).',
    conversationIdTip: '(Optional) Conversation ID: leave empty for first-time conversation; pass conversation_id from context to continue dialogue.',
    messageFeedbackApi: 'Message de retour d\'information de l\'utilisateur du terminal, comme',
    messageFeedbackApiTip: 'Évaluez les messages reçus au nom des utilisateurs finaux avec des likes ou des dislikes. Ces données sont visibles sur la page Logs & Annotations et sont utilisées pour l\'ajustement futur du modèle.',
    messageIDTip: 'ID de message',
    ratingTip: 'aimer ou ne pas aimer, null est annuler',
    chatMsgHistoryApi: 'Obtenez le message de l\'historique de chat',
    chatMsgHistoryApiTip: 'La première page renvoie la dernière `limit` bar, qui est en ordre inverse.',
    chatMsgHistoryConversationIdTip: 'ID de conversation',
    chatMsgHistoryFirstId: 'ID du premier enregistrement de chat sur la page actuelle. La valeur par défaut est aucune.',
    chatMsgHistoryLimit: 'Combien de chats sont renvoyés en une seule demande',
    conversationsListApi: 'Obtenir la liste des conversations',
    conversationsListApiTip: 'Obtient la liste des sessions de l\'utilisateur actuel. Par défaut, les 20 dernières sessions sont renvoyées.',
    conversationsListFirstIdTip: 'L\'ID du dernier enregistrement sur la page actuelle, par défaut aucun.',
    conversationsListLimitTip: 'Combien de chats sont renvoyés dans une seule requête',
    conversationRenamingApi: 'Renommage de la conversation',
    conversationRenamingApiTip: 'Renommez les conversations ; le nom est affiché dans les interfaces client multi-session.',
    conversationRenamingNameTip: 'Nouveau nom',
    parametersApi: 'Obtenir des informations sur les paramètres de l\'application',
    parametersApiTip: 'Récupérer les paramètres d\'entrée configurés, y compris les noms de variables, les noms de champs, les types et les valeurs par défaut. Typiquement utilisé pour afficher ces champs dans un formulaire ou pour remplir les valeurs par défaut après le chargement du',
  },
  develop: {
    requestBody: 'Corps de la Requête',
    pathParams: 'Params de chemin',
    query: 'Requête',
  },
  loading: 'Chargement',
  regenerate: 'Régénérer',
}

export default translation
