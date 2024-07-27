declare namespace Auth {
  export interface ClientKeys {
    clientPrivateKey: string;
    clientPublicKey: string;
  }

  export interface Store extends ClientKeys {
    setClientKeys: (keys: ClientKeys) => void;
  }
}
