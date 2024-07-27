declare namespace Auth {
  export interface PublicKeys {
    clientPublicKey: string;
    encryptionServerPublicKey: string;
    mainServerPublicKey: string;
  }

  export interface Store extends PublicKeys {
    clientPrivateKey: string;
    setClientPrivateKey: (key: string) => void;
    setPublicKey: (keys: PublicKeys) => void;
  }
}
