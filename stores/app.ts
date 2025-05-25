import { create } from 'zustand'



export type SocialItem = {
    key: SocialKey,
    value: string,
    id: number
}
export type SocialKey = "linkedin" | "facebook" | "instagram" | "youtube" | "x"| "whatsapp"|'phone'  | 'address' | 'email' | 'appoitnments' | 'desc';
/* export type SettingsType = {
    email?: string
    facebook?: string
    footer_desc_ar?: string
    footer_desc_en?: string
    instagram?: string
    keywords_ar?: string
    keywords_en?: string
    linkedin?: string
    locationInformation_ar?: string
    locationInformation_en?: string
    meta_desc_ar?: string
    meta_desc_en?: string
    meta_title_ar?: string
    meta_title_en?: string
    phone?: string
    twitter?: string
    website_title_ar?: string
    website_title_en?: string
    whatsapp?: string
    x?: string
    youtube?: string
    desc?: string
} */
export type SettingsType = {
    [key in SocialKey]?: string; 
  }
interface AppStore {
    settings: SettingsType;
    setSettings: (settings: SettingsType) => void;
}

const inititals = {
    settings: {
        email: '',
        facebook: '',
        footer_desc_ar: '',
        footer_desc_en: '',
        instagram: '',
        keywords_ar: '',
        keywords_en: '',
        linkedin: '',
        locationInformation_ar: '',
        locationInformation_en: '',
        meta_desc_ar: '',
        meta_desc_en: '',
        meta_title_ar: '',
        meta_title_en: '',
        phone: '',
        website_title_ar: '',
        website_title_en: '',
        whatsapp: '',
        x: '',
        youtube: '',
        desc:''
    }
}

export const appStore = create<AppStore>((set) => ({
    ...inititals,
    setSettings: (settings ={}) => set(() => ({ settings })),
}));

