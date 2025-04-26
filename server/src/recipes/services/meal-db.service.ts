import { Injectable } from "@nestjs/common";
import axios, { AxiosResponse } from "axios";
import {
  FilterParams,
  Meal,
  MealApiResponse,
} from "../interfaces/meal.interface";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class MealDbService {
  private readonly baseUrl: string;

  constructor(private readonly configService: ConfigService) {
    this.baseUrl = this.configService.get<string>("BASE_URL")!;
  }

  async fetchAll(): Promise<Meal[]> {
    const response: AxiosResponse<MealApiResponse> =
      await axios.get<MealApiResponse>(`${this.baseUrl}/search.php?s=`);
    return response.data.meals || [];
  }

  async filterBy(params: FilterParams) {
    const queryString = new URLSearchParams(
      params as Record<string, string>,
    ).toString();
    const response = await axios.get<MealApiResponse>(
      `${this.baseUrl}/filter.php?${queryString}`,
    );
    return response.data.meals || [];
  }

  async getById(id: string) {
    const response: AxiosResponse<MealApiResponse> =
      await axios.get<MealApiResponse>(`${this.baseUrl}/lookup.php?i=${id}`);
    return response.data.meals?.[0] || null;
  }
}
