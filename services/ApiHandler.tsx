import axiosInstance from "./instance";
import AppError from "../utils/appError";
import { SocialItem, SocialKey } from "@/stores/app";

export const getOverVeiw = async (banner: BannerTypes): Promise<OverVeiw> => {
  return await axiosInstance
    .get(`/client/preview?banner_type=${banner}`)
    .then((res) => {
      const sections: { [key in BannerTypes]?: Section } =
        res.data.data.sections.reduce(
          (acc: { [key in BannerTypes]?: Section }, item: Section) => {
            const { type } = item;
            acc[type] = item;
            return acc;
          },{}
        );
      const result = {
        ...res.data.data,
        sections,
      };
      return result;
    })
    .catch((error) => {
      if (error instanceof Error) {
        throw new AppError(error.message, 500);
      } else {
        throw new AppError("Field to fetch home", 500);
      }
    });
};
export const getWhyUs = async (): Promise<Section> => {
  return await axiosInstance
    .get("/client/preview/why-us/")
    .then((req) => req.data.data[0])
    .catch((error) => {
      if (error instanceof Error) {
        throw new AppError(error.message, 500);
      } else {
        throw new AppError("Field to fetch home", 500);
      }
    });
};
export const getSocial = async () => {
  return await axiosInstance
    .get("client/preview/social")
    .then((res) =>{
      console.log(res.data.data)
      const social: { [key in SocialKey ]?: string } =
      res.data.data.reduce(
        (acc: { [key in SocialKey]: string }, item: SocialItem) => {
          const { key } = item;
          acc[key] = item.value;
          return acc;
        },{}
      );
      return social;
    })
    .catch((error) => {
      if (error instanceof Error) {
        throw new AppError(error.message, 500);
      } else {
        throw new AppError("Field to fetch home", 500);
      }
    });
};
export const getQuestions = async (): Promise<FAQData> => {
  return await axiosInstance
    .get("/client/preview/faq")
    .then((res) => res.data.data)
    .catch((error) => {
      if (error instanceof Error) {
        throw new AppError(error.message, 500);
      } else {
        throw new AppError("Field to fetch home", 500);
      }
    });
};

export const getServices = async (): Promise<OurServicesData> => {
  return await axiosInstance
    .get("/client/preview/our-services")
    .then((res) => res.data.data)
    .catch((error) => {
      if (error instanceof Error) {
        throw new AppError(error.message, 500);
      } else {
        throw new AppError("Field to fetch home", 500);
      }
    });
  };
  export const getPrivacy = async ():Promise<Section>=>{
  return await axiosInstance
    .get("/client/preview/privacy")
    .then((res) => res.data.data)
    .catch((error) => {
      if (error instanceof Error) {
        throw new AppError(error.message, 500);
      } else {
        throw new AppError("Field to fetch home", 500);
      }
    });

}

// export const getCategoriesData = async () => {
//   try {
//     const { data } = await axiosInstance.get("/categories");
//     return data?.data || [];
//   } catch {
//     throw new CustomError("Failed to fetch Categories data", 500, "APIError");

//   }
// };

// export const getShareData = async () => {
//   return await axiosInstance.get("/relations");
// };

// export const getSettingsData = async () => {
//   return await axiosInstance.get("/settings");
// };

// export const getTermsData = async () => {
//   return await axiosInstance.get(`/term`);
// };

// export const getPrivacyData = async () => {
//   return await axiosInstance.get(`/policy`);
// };
