import axios from 'axios';
import create from 'zustand';
import { API_URL } from '../query';

interface QrCodeActions {
  qrCodeInfo: [] | undefined;
  QrCodeId: String;
  setQrCodeInfo: (qrCodeInfo: []) => void;
  setQrCodeId: (QrCodeId: String) => void;
  getQrCodeInfo: (QrCodeId: String) => Promise<void>;
}

const useQrCode = create<QrCodeActions>((set, get) => ({
  qrCodeInfo: [],
  QrCodeId: '',
  setQrCodeInfo: (qrCodeInfo) => {
    set((state) => ({ qrCodeInfo }));
  },
  setQrCodeId: (QrCodeId) => {
    set((state) => ({ QrCodeId }));
  },
  getQrCodeInfo: async (QrCodeId: String) => {
    try {
      const response = await axios.get(`${API_URL}/api/qr/codes/${QrCodeId}`);
      get().setQrCodeInfo(response.data);
    } catch (err) {
      console.log(err);
    }
  },
}));

export default useQrCode;
