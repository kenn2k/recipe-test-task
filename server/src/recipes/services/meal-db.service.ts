import { Injectable } from "@nestjs/common";
import axios, { AxiosResponse } from "axios";
import { Meal, MealApiResponse } from "../interfaces/meal.interface";

@Injectable()
export class MealDbService {
  private readonly BASE_URL = process.env.BASE_URL;

  async fetchAll(): Promise<Meal[]> {
    const response: AxiosResponse<MealApiResponse> =
      await axios.get<MealApiResponse>(`${this.BASE_URL}/search.php?s=`);
    return response.data.meals || [];
  }

  async filterBy(type: "i" | "c" | "a", value: string) {
    const response: AxiosResponse<MealApiResponse> =
      await axios.get<MealApiResponse>(
        `${this.BASE_URL}/filter.php?${type}=${value}`,
      );
    return response.data.meals || [];
  }

  async getById(id: string) {
    const response: AxiosResponse<MealApiResponse> =
      await axios.get<MealApiResponse>(`${this.BASE_URL}/lookup.php?i=${id}`);
    return response.data.meals?.[0] || null;
  }
}
