import { Dashboard } from "@/types";
import axios from "axios";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";

const URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const fetcherAxios = async (url: string) => {
    const res = await axios.get(url);
    return res.data;
};

export const useFetchWidgetData = (interval: number) => {
    const { data, isLoading } = useSWR(`/api/widget/8SNQ5/data?dashboardId=7zAio`, fetcherAxios, { refreshInterval: interval });
    return {
        data,
        isLoading
    };
};

export const useFetchWidgetWeeklyData = (interval: number) => {
    const { data, isLoading } = useSWR(`/api/widget/8SNQ5/data?dashboardId=7zAio&periode=week`, fetcherAxios, { refreshInterval: interval });
    return {
        data,
        isLoading
    };
};


export const useFetchWidgetMonthlyData = (interval: number) => {
    const { data, isLoading } = useSWR(`/api/widget/8SNQ5/data?dashboardId=7zAio&periode=month`, fetcherAxios, { refreshInterval: interval });
    return {
        data,
        isLoading
    };
};



export const useFetchWidgetLastData = (interval: number) => {
    const { data, isLoading } = useSWR(`/api/widget/8SNQ5/data?dashboardId=7zAio&sort=desc&last=true`, fetcherAxios, { refreshInterval: interval });
    return {
        data,
        isLoading
    };
};


export const useFetchDashboard = () => {
    const { data, isLoading } = useSWR(`/api/dashboard`, fetcherAxios);
    return {
        data,
        isLoading
    };
};

export const useFetchDashboardId = () => {
    const { data, isLoading } = useSWR(`/api/dashboard/pBoCq`, fetcherAxios);

    type FetchDashboardResult = {
        data: Dashboard; // Replace YourDataTypeHere with the actual data type
        isLoading: boolean;
    };
    return {
        data,
        isLoading
    } as FetchDashboardResult;
};

export const useUpdateDashboard = () => {
    async function sendRequest(url: string, { arg }: { arg: { name?: string; layouts?: object } }) {
        const res = await axios.put(url, arg);
        return res.data;
    }
    const { trigger, isMutating } = useSWRMutation(`/api/dashboard/pBoCq`, sendRequest)

    return {
        trigger,
        isMutating
    }
}

export const useFetchData = (interval: number) => {
    const { data, isLoading } = useSWR(`/api/data`, fetcherAxios, { refreshInterval: interval });
    return {
        data,
        isLoading
    };
};

export const useUpdateDevice = () => {
    async function sendRequest(url: string, { arg }: { arg: { parser: string } }) {
        const res = await axios.put(url, arg);
        return res.data;
    }
    const { trigger, isMutating } = useSWRMutation(`${URL}/device/update/aNV3E`, sendRequest)

    return {
        trigger,
        isMutating
    }
}
