import { useTranslation } from "react-i18next";

export const useTranslatedPackages = () => {
  const { t } = useTranslation();

  return [
    {
      id: "free",
      name: t("packages.free.name"),
      price: t("packages.free.price"),
      benefits: t("packages.free.benefits", {
        returnObjects: true,
      }) as string[],
    },
    {
      id: "student",
      name: t("packages.student.name"),
      price: t("packages.student.price"),
      benefits: t("packages.student.benefits", {
        returnObjects: true,
      }) as string[],
    },
    {
      id: "basic",
      name: t("packages.basic.name"),
      price: t("packages.basic.price"),
      benefits: t("packages.basic.benefits", {
        returnObjects: true,
      }) as string[],
    },
    {
      id: "business",
      name: t("packages.business.name"),
      price: t("packages.business.price"),
      benefits: t("packages.business.benefits", {
        returnObjects: true,
      }) as string[],
    },
  ];
};
