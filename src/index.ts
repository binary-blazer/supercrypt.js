import Decrypt from "./functions/decrypt";
import Encrypt from "./functions/encrypt";

const SuperCryptJS = {
  Decrypt,
  Encrypt,
};

export default SuperCryptJS as typeof SuperCryptJS & {
  Decrypt: typeof Decrypt;
  Encrypt: typeof Encrypt;
};
