"use client";

import { MenuItem, VehicleRecord } from "@/constants/Types";
import {
    CompatibilityFormData,
    compatibilitySchema,
} from "@/schema/compatibilitySchema";
import {
    getMakes,
    getModels,
    getVehicleOptions,
    getVehicleRecord,
    getYears,
} from "@/utils/compatibility";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { FaCarOn } from "react-icons/fa6";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select";

export default function CompatibilityForm() {
    // State to store vehicle info
    const years = useMemo(() => getYears(), []); // Memoize the year options to prevent recalculating each render˝
    const [makes, setMakes] = useState<MenuItem[]>([]);
    const [models, setModels] = useState<MenuItem[]>([]);
    const [vehicleOptions, setVehicleOptions] = useState<MenuItem[]>([]);
    const [vehicleRecord, setVehicleRecord] = useState<VehicleRecord | null>(
        null,
    );
    const [alertText, setAlertText] = useState({ title: "", description: "" });

    const form = useForm<CompatibilityFormData>({
        resolver: zodResolver(compatibilitySchema),
        mode: "onBlur",
    });

    const [year, make, model, option] = form.watch([
        "year",
        "make",
        "model",
        "option",
    ]);

    const onSubmit = useCallback(async () => {
        setAlertText(
            vehicleRecord && vehicleRecord.atvType === "EV"
                ? {
                      title: "Unsupported",
                      description: "Sorry, we do not support EVs yet.",
                  }
                : {
                      title: "Supported",
                      description:
                          "Your vehicle is compatible with our device!",
                  },
        );
    }, [vehicleRecord]);

    const fetchMakes = useCallback(async () => {
        if (year) setMakes(await getMakes(year));
    }, [year]);

    const fetchModels = useCallback(async () => {
        if (year && make) setModels(await getModels(year, make));
    }, [year, make]);

    const fetchVehicleOptions = useCallback(async () => {
        if (year && make && model)
            setVehicleOptions(await getVehicleOptions(year, make, model));
    }, [year, make, model]);

    const fetchVehicleRecord = useCallback(async () => {
        if (option) setVehicleRecord(await getVehicleRecord(option));
    }, [option]);

    useEffect(() => {
        fetchMakes();
    }, [fetchMakes]);

    useEffect(() => {
        fetchModels();
    }, [fetchModels]);

    useEffect(() => {
        fetchVehicleOptions();
    }, [fetchVehicleOptions]);

    useEffect(() => {
        fetchVehicleRecord();
    }, [fetchVehicleRecord]);

    useEffect(() => {
        onSubmit();
    }, [onSubmit]);

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-3 lg:flex-row">
                <FormField
                    control={form.control}
                    name="year"
                    render={({ field }) => (
                        <FormItem className="flex-1">
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}>
                                <FormControl className="w-full">
                                    <SelectTrigger value={field.value}>
                                        <SelectValue placeholder="Year" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {years.map((year) => (
                                        <SelectItem key={year} value={year}>
                                            {year}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="make"
                    render={({ field }) => (
                        <FormItem className="flex-1">
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                disabled={!year}>
                                <FormControl className="w-full">
                                    <SelectTrigger value={field.value}>
                                        <SelectValue placeholder="Make" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {makes.map((make) => (
                                        <SelectItem
                                            key={make.value}
                                            value={make.value}>
                                            {make.text}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="model"
                    render={({ field }) => (
                        <FormItem className="flex-1">
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                disabled={!year || !make}>
                                <FormControl className="w-full">
                                    <SelectTrigger value={field.value}>
                                        <SelectValue placeholder="Model" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {models.map((model) => (
                                        <SelectItem
                                            key={model.value}
                                            value={model.value}>
                                            {model.text}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="option"
                    render={({ field }) => (
                        <FormItem className="flex-1">
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                disabled={!year || !make || !model}>
                                <FormControl className="w-full">
                                    <SelectTrigger value={field.value}>
                                        <SelectValue placeholder="Option" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {vehicleOptions.map((option) => (
                                        <SelectItem
                                            key={option.value}
                                            value={option.value}>
                                            {option.text}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </FormItem>
                    )}
                />
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button
                            type="submit"
                            disabled={!option}
                            className="flex items-center justify-center gap-2">
                            <FaCarOn className="" />
                            Check Compatibility
                        </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>
                                {alertText.title}
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                                {alertText.description}
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogAction>Close</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </form>
        </Form>
    );
}
