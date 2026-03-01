export const calculateYoutubeRevenue = (
    monthlyViews: number,
    rpm: number = 4,
    subscribers: number = 0,
    engagementRate: number = 0.05,
    marketRate: number = 20,
    trustMultiplier: number = 1.0,
    productPrice: number = 50,
    membershipFee: number = 5
) => {
    const adRevenue = (monthlyViews * rpm) / 1000;
    const affiliateRevenue = monthlyViews * 0.02 * 0.015 * 30;
    const sponsorship = engagementRate > 0.03 ? subscribers * 0.001 * marketRate : 0;
    const digitalProduct = subscribers * trustMultiplier * 0.005 * productPrice;
    const membership = subscribers * 0.001 * membershipFee;

    return {
        adRevenue,
        affiliateRevenue,
        sponsorship,
        digitalProduct,
        membership,
        total: adRevenue + affiliateRevenue + sponsorship + digitalProduct + membership
    };
};

export const calculateTiktokRevenue = (
    monthlyViews: number,
    followers: number = 0,
    engagementRate: number = 0.1
) => {
    const creatorFund = monthlyViews * 0.000035;
    const brandDeal = followers * engagementRate * 0.5;
    const affiliate = monthlyViews * 0.01 * 0.01 * 25;

    return {
        creatorFund,
        brandDeal,
        affiliate,
        total: creatorFund + brandDeal + affiliate
    };
};

export const calculateInstagramRevenue = (
    followers: number,
    avgReelViews: number,
    engagementRate: number = 0.05,
    productPrice: number = 50
) => {
    const sponsoredPost = followers * engagementRate * 0.01 * 10;
    const affiliateLink = avgReelViews * 0.015 * 0.02 * 35;
    const digitalProduct = followers * 0.002 * productPrice;

    return {
        sponsoredPost,
        affiliateLink,
        digitalProduct,
        total: sponsoredPost + affiliateLink + digitalProduct
    };
};

export const calculateXRevenue = (
    followers: number,
    monthlyImpressions: number
) => {
    const creatorSubscriptions = followers * 0.001 * 5;
    const affiliate = monthlyImpressions * 0.005 * 0.01 * 20;
    const newsletter = followers * 0.02 * 5;

    return {
        creatorSubscriptions,
        affiliate,
        newsletter,
        total: creatorSubscriptions + affiliate + newsletter
    };
};
