import axios, { AxiosInstance } from "axios";
import { paths } from "./types";
import {
  Color,
  PaginatedResponse,
  Element,
  Minifig,
  MinifigPart,
  Set,
  PartCategory,
  Part,
  PartColor,
  Moc,
  SetPart,
  Theme,
  UserToken,
  Badge,
  UserProfile,
  PartList,
  SetList,
  UserPart,
  UserSet,
  LostPart,
  BuildInfo,
} from "./schemas";

const API_BASE_URL = "https://rebrickable.com/api/v3";

export class RebrickableAPI {
  private readonly client: AxiosInstance;

  constructor(apiKey: string) {
    if (!apiKey) {
      throw new Error("Rebrickable API key is required.");
    }

    this.client = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        Authorization: `key ${apiKey}`,
      },
    });
  }

  async getColors(
    params?: paths["/api/v3/lego/colors/"]["get"]["parameters"]["query"]
  ): Promise<PaginatedResponse<Color>> {
    const response = await this.client.get<PaginatedResponse<Color>>(
      "/api/v3/lego/colors/",
      { params }
    );
    return response.data;
  }

  async getMinifigs(
    params?: paths["/api/v3/lego/minifigs/"]["get"]["parameters"]["query"]
  ): Promise<PaginatedResponse<Minifig>> {
    const response = await this.client.get<PaginatedResponse<Minifig>>(
      "/api/v3/lego/minifigs/",
      { params }
    );
    return response.data;
  }
  async getColor(
    id: paths["/api/v3/lego/colors/{id}/"]["get"]["parameters"]["path"]["id"]
  ): Promise<Color> {
    const response = await this.client.get<Color>(`/api/v3/lego/colors/${id}/`);
    return response.data;
  }
  async getElement(
    elementId: paths["/api/v3/lego/elements/{element_id}/"]["get"]["parameters"]["path"]["element_id"]
  ): Promise<Element> {
    const response = await this.client.get<Element>(
      `/api/v3/lego/elements/${elementId}/`
    );
    return response.data;
  }

  async getMinifig(
    setNum: paths["/api/v3/lego/minifigs/{set_num}/"]["get"]["parameters"]["path"]["set_num"]
  ): Promise<Minifig> {
    const response = await this.client.get<Minifig>(
      `/api/v3/lego/minifigs/${setNum}/`
    );
    return response.data;
  }

  async getMinifigParts(
    setNum: paths["/api/v3/lego/minifigs/{set_num}/parts/"]["get"]["parameters"]["path"]["set_num"],
    params?: paths["/api/v3/lego/minifigs/{set_num}/parts/"]["get"]["parameters"]["query"]
  ): Promise<PaginatedResponse<MinifigPart>> {
    const response = await this.client.get<PaginatedResponse<MinifigPart>>(
      `/api/v3/lego/minifigs/${setNum}/parts/`,
      { params }
    );
    return response.data;
  }

  async getMinifigSets(
    setNum: paths["/api/v3/lego/minifigs/{set_num}/sets/"]["get"]["parameters"]["path"]["set_num"],
    params?: paths["/api/v3/lego/minifigs/{set_num}/sets/"]["get"]["parameters"]["query"]
  ): Promise<PaginatedResponse<Set>> {
    const response = await this.client.get<PaginatedResponse<Set>>(
      `/api/v3/lego/minifigs/${setNum}/sets/`,
      { params }
    );
    return response.data;
  }

  async getPartCategories(
    params?: paths["/api/v3/lego/part_categories/"]["get"]["parameters"]["query"]
  ): Promise<PaginatedResponse<PartCategory>> {
    const response = await this.client.get<PaginatedResponse<PartCategory>>(
      "/api/v3/lego/part_categories/",
      { params }
    );
    return response.data;
  }

  async getPartCategory(
    id: paths["/api/v3/lego/part_categories/{id}/"]["get"]["parameters"]["path"]["id"]
  ): Promise<PartCategory> {
    const response = await this.client.get<PartCategory>(
      `/api/v3/lego/part_categories/${id}/`
    );
    return response.data;
  }

  async getParts(
    params?: paths["/api/v3/lego/parts/"]["get"]["parameters"]["query"]
  ): Promise<PaginatedResponse<Part>> {
    const response = await this.client.get<PaginatedResponse<Part>>(
      "/api/v3/lego/parts/",
      { params }
    );
    return response.data;
  }

  async getPart(
    partNum: paths["/api/v3/lego/parts/{part_num}/"]["get"]["parameters"]["path"]["part_num"]
  ): Promise<Part> {
    const response = await this.client.get<Part>(
      `/api/v3/lego/parts/${partNum}/`
    );
    return response.data;
  }

  async getPartColors(
    partNum: paths["/api/v3/lego/parts/{part_num}/colors/"]["get"]["parameters"]["path"]["part_num"],
    params?: paths["/api/v3/lego/parts/{part_num}/colors/"]["get"]["parameters"]["query"]
  ): Promise<PaginatedResponse<PartColor>> {
    const response = await this.client.get<PaginatedResponse<PartColor>>(
      `/api/v3/lego/parts/${partNum}/colors/`,
      { params }
    );
    return response.data;
  }

  async getPartColor(
    partNum: paths["/api/v3/lego/parts/{part_num}/colors/{color_id}/"]["get"]["parameters"]["path"]["part_num"],
    colorId: paths["/api/v3/lego/parts/{part_num}/colors/{color_id}/"]["get"]["parameters"]["path"]["color_id"]
  ): Promise<PartColor> {
    const response = await this.client.get<PartColor>(
      `/api/v3/lego/parts/${partNum}/colors/${colorId}/`
    );
    return response.data;
  }

  async getPartColorSets(
    partNum: paths["/api/v3/lego/parts/{part_num}/colors/{color_id}/sets/"]["get"]["parameters"]["path"]["part_num"],
    colorId: paths["/api/v3/lego/parts/{part_num}/colors/{color_id}/sets/"]["get"]["parameters"]["path"]["color_id"],
    params?: paths["/api/v3/lego/parts/{part_num}/colors/{color_id}/sets/"]["get"]["parameters"]["query"]
  ): Promise<PaginatedResponse<Set>> {
    const response = await this.client.get<PaginatedResponse<Set>>(
      `/api/v3/lego/parts/${partNum}/colors/${colorId}/sets/`,
      { params }
    );
    return response.data;
  }

  async getSets(
    params?: paths["/api/v3/lego/sets/"]["get"]["parameters"]["query"]
  ): Promise<PaginatedResponse<Set>> {
    const response = await this.client.get<PaginatedResponse<Set>>(
      "/api/v3/lego/sets/",
      { params }
    );
    return response.data;
  }

  async getSet(
    setNum: paths["/api/v3/lego/sets/{set_num}/"]["get"]["parameters"]["path"]["set_num"]
  ): Promise<Set> {
    const response = await this.client.get<Set>(`/api/v3/lego/sets/${setNum}/`);
    return response.data;
  }

  async getSetAlternates(
    setNum: paths["/api/v3/lego/sets/{set_num}/alternates/"]["get"]["parameters"]["path"]["set_num"],
    params?: paths["/api/v3/lego/sets/{set_num}/alternates/"]["get"]["parameters"]["query"]
  ): Promise<PaginatedResponse<Moc>> {
    const response = await this.client.get<PaginatedResponse<Moc>>(
      `/api/v3/lego/sets/${setNum}/alternates/`,
      { params }
    );
    return response.data;
  }

  async getSetMinifigs(
    setNum: paths["/api/v3/lego/sets/{set_num}/minifigs/"]["get"]["parameters"]["path"]["set_num"],
    params?: paths["/api/v3/lego/sets/{set_num}/minifigs/"]["get"]["parameters"]["query"]
  ): Promise<PaginatedResponse<Minifig>> {
    const response = await this.client.get<PaginatedResponse<Minifig>>(
      `/api/v3/lego/sets/${setNum}/minifigs/`,
      { params }
    );
    return response.data;
  }

  async getSetParts(
    setNum: paths["/api/v3/lego/sets/{set_num}/parts/"]["get"]["parameters"]["path"]["set_num"],
    params?: paths["/api/v3/lego/sets/{set_num}/parts/"]["get"]["parameters"]["query"]
  ): Promise<PaginatedResponse<SetPart>> {
    const response = await this.client.get<PaginatedResponse<SetPart>>(
      `/api/v3/lego/sets/${setNum}/parts/`,
      { params }
    );
    return response.data;
  }

  async getSetSets(
    setNum: paths["/api/v3/lego/sets/{set_num}/sets/"]["get"]["parameters"]["path"]["set_num"],
    params?: paths["/api/v3/lego/sets/{set_num}/sets/"]["get"]["parameters"]["query"]
  ): Promise<PaginatedResponse<Set>> {
    const response = await this.client.get<PaginatedResponse<Set>>(
      `/api/v3/lego/sets/${setNum}/sets/`,
      { params }
    );
    return response.data;
  }

  async getThemes(
    params?: paths["/api/v3/lego/themes/"]["get"]["parameters"]["query"]
  ): Promise<PaginatedResponse<Theme>> {
    const response = await this.client.get<PaginatedResponse<Theme>>(
      "/api/v3/lego/themes/",
      { params }
    );
    return response.data;
  }

  async getTheme(
    id: paths["/api/v3/lego/themes/{id}/"]["get"]["parameters"]["path"]["id"]
  ): Promise<Theme> {
    const response = await this.client.get<Theme>(`/api/v3/lego/themes/${id}/`);
    return response.data;
  }

  // User endpoints
  async createUserToken(
    username: string,
    password: string
  ): Promise<UserToken> {
    const response = await this.client.post<UserToken>(
      "/api/v3/users/_token/",
      new URLSearchParams({
        username,
        password,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data;
  }

  async getBadges(
    params?: paths["/api/v3/users/badges/"]["get"]["parameters"]["query"]
  ): Promise<PaginatedResponse<Badge>> {
    const response = await this.client.get<PaginatedResponse<Badge>>(
      "/api/v3/users/badges/",
      { params }
    );
    return response.data;
  }

  async getBadge(
    id: paths["/api/v3/users/badges/{id}/"]["get"]["parameters"]["path"]["id"]
  ): Promise<Badge> {
    const response = await this.client.get<Badge>(
      `/api/v3/users/badges/${id}/`
    );
    return response.data;
  }

  async getUserProfile(
    userToken: paths["/api/v3/users/{user_token}/profile/"]["get"]["parameters"]["path"]["user_token"]
  ): Promise<UserProfile> {
    const response = await this.client.get<UserProfile>(
      `/api/v3/users/${userToken}/profile/`
    );
    return response.data;
  }

  async getUserAllParts(
    userToken: paths["/api/v3/users/{user_token}/allparts/"]["get"]["parameters"]["path"]["user_token"],
    params?: paths["/api/v3/users/{user_token}/allparts/"]["get"]["parameters"]["query"]
  ): Promise<PaginatedResponse<UserPart>> {
    const response = await this.client.get<PaginatedResponse<UserPart>>(
      `/api/v3/users/${userToken}/allparts/`,
      { params }
    );
    return response.data;
  }

  async getUserBuild(
    userToken: paths["/api/v3/users/{user_token}/build/{set_num}/"]["get"]["parameters"]["path"]["user_token"],
    setNum: paths["/api/v3/users/{user_token}/build/{set_num}/"]["get"]["parameters"]["path"]["set_num"]
  ): Promise<BuildInfo> {
    const response = await this.client.get<BuildInfo>(
      `/api/v3/users/${userToken}/build/${setNum}/`
    );
    return response.data;
  }

  async getUserLostParts(
    userToken: paths["/api/v3/users/{user_token}/lost_parts/"]["get"]["parameters"]["path"]["user_token"],
    params?: paths["/api/v3/users/{user_token}/lost_parts/"]["get"]["parameters"]["query"]
  ): Promise<PaginatedResponse<LostPart>> {
    const response = await this.client.get<PaginatedResponse<LostPart>>(
      `/api/v3/users/${userToken}/lost_parts/`,
      { params }
    );
    return response.data;
  }

  async addUserLostPart(
    userToken: paths["/api/v3/users/{user_token}/lost_parts/"]["post"]["parameters"]["path"]["user_token"],
    data: {
      inv_part_id: number;
      lost_quantity?: number;
    }
  ): Promise<LostPart> {
    const response = await this.client.post<LostPart>(
      `/api/v3/users/${userToken}/lost_parts/`,
      new URLSearchParams({
        inv_part_id: data.inv_part_id.toString(),
        ...(data.lost_quantity && {
          lost_quantity: data.lost_quantity.toString(),
        }),
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data;
  }

  async deleteUserLostPart(
    userToken: paths["/api/v3/users/{user_token}/lost_parts/{id}/"]["delete"]["parameters"]["path"]["user_token"],
    id: paths["/api/v3/users/{user_token}/lost_parts/{id}/"]["delete"]["parameters"]["path"]["id"]
  ): Promise<void> {
    await this.client.delete(`/api/v3/users/${userToken}/lost_parts/${id}/`);
  }

  async getUserMinifigs(
    userToken: paths["/api/v3/users/{user_token}/minifigs/"]["get"]["parameters"]["path"]["user_token"],
    params?: paths["/api/v3/users/{user_token}/minifigs/"]["get"]["parameters"]["query"]
  ): Promise<PaginatedResponse<Minifig>> {
    const response = await this.client.get<PaginatedResponse<Minifig>>(
      `/api/v3/users/${userToken}/minifigs/`,
      { params }
    );
    return response.data;
  }

  async getUserPartLists(
    userToken: paths["/api/v3/users/{user_token}/partlists/"]["get"]["parameters"]["path"]["user_token"],
    params?: paths["/api/v3/users/{user_token}/partlists/"]["get"]["parameters"]["query"]
  ): Promise<PaginatedResponse<PartList>> {
    const response = await this.client.get<PaginatedResponse<PartList>>(
      `/api/v3/users/${userToken}/partlists/`,
      { params }
    );
    return response.data;
  }

  async createUserPartList(
    userToken: paths["/api/v3/users/{user_token}/partlists/"]["post"]["parameters"]["path"]["user_token"],
    data: {
      name: string;
      is_buildable?: boolean;
      num_parts?: number;
    }
  ): Promise<PartList> {
    const response = await this.client.post<PartList>(
      `/api/v3/users/${userToken}/partlists/`,
      new URLSearchParams({
        name: data.name,
        ...(data.is_buildable !== undefined && {
          is_buildable: data.is_buildable.toString(),
        }),
        ...(data.num_parts && { num_parts: data.num_parts.toString() }),
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data;
  }

  async getUserPartList(
    userToken: paths["/api/v3/users/{user_token}/partlists/{list_id}/"]["get"]["parameters"]["path"]["user_token"],
    listId: paths["/api/v3/users/{user_token}/partlists/{list_id}/"]["get"]["parameters"]["path"]["list_id"]
  ): Promise<PartList> {
    const response = await this.client.get<PartList>(
      `/api/v3/users/${userToken}/partlists/${listId}/`
    );
    return response.data;
  }

  async updateUserPartList(
    userToken: paths["/api/v3/users/{user_token}/partlists/{list_id}/"]["put"]["parameters"]["path"]["user_token"],
    listId: paths["/api/v3/users/{user_token}/partlists/{list_id}/"]["put"]["parameters"]["path"]["list_id"],
    data: {
      name: string;
      is_buildable?: boolean;
      num_parts?: number;
    }
  ): Promise<PartList> {
    const response = await this.client.put<PartList>(
      `/api/v3/users/${userToken}/partlists/${listId}/`,
      new URLSearchParams({
        name: data.name,
        ...(data.is_buildable !== undefined && {
          is_buildable: data.is_buildable.toString(),
        }),
        ...(data.num_parts && { num_parts: data.num_parts.toString() }),
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data;
  }

  async patchUserPartList(
    userToken: paths["/api/v3/users/{user_token}/partlists/{list_id}/"]["patch"]["parameters"]["path"]["user_token"],
    listId: paths["/api/v3/users/{user_token}/partlists/{list_id}/"]["patch"]["parameters"]["path"]["list_id"],
    data: {
      name?: string;
      is_buildable?: boolean;
      num_parts?: number;
    }
  ): Promise<PartList> {
    const response = await this.client.patch<PartList>(
      `/api/v3/users/${userToken}/partlists/${listId}/`,
      new URLSearchParams({
        ...(data.name && { name: data.name }),
        ...(data.is_buildable !== undefined && {
          is_buildable: data.is_buildable.toString(),
        }),
        ...(data.num_parts && { num_parts: data.num_parts.toString() }),
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data;
  }

  async deleteUserPartList(
    userToken: paths["/api/v3/users/{user_token}/partlists/{list_id}/"]["delete"]["parameters"]["path"]["user_token"],
    listId: paths["/api/v3/users/{user_token}/partlists/{list_id}/"]["delete"]["parameters"]["path"]["list_id"]
  ): Promise<void> {
    await this.client.delete(`/api/v3/users/${userToken}/partlists/${listId}/`);
  }

  async getUserPartListParts(
    userToken: paths["/api/v3/users/{user_token}/partlists/{list_id}/parts/"]["get"]["parameters"]["path"]["user_token"],
    listId: paths["/api/v3/users/{user_token}/partlists/{list_id}/parts/"]["get"]["parameters"]["path"]["list_id"],
    params?: paths["/api/v3/users/{user_token}/partlists/{list_id}/parts/"]["get"]["parameters"]["query"]
  ): Promise<PaginatedResponse<UserPart>> {
    const response = await this.client.get<PaginatedResponse<UserPart>>(
      `/api/v3/users/${userToken}/partlists/${listId}/parts/`,
      { params }
    );
    return response.data;
  }

  async addUserPartListPart(
    userToken: paths["/api/v3/users/{user_token}/partlists/{list_id}/parts/"]["post"]["parameters"]["path"]["user_token"],
    listId: paths["/api/v3/users/{user_token}/partlists/{list_id}/parts/"]["post"]["parameters"]["path"]["list_id"],
    data: {
      part_num: string;
      color_id: number;
      quantity: number;
    }
  ): Promise<UserPart> {
    const response = await this.client.post<UserPart>(
      `/api/v3/users/${userToken}/partlists/${listId}/parts/`,
      new URLSearchParams({
        part_num: data.part_num,
        color_id: data.color_id.toString(),
        quantity: data.quantity.toString(),
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data;
  }

  async getUserPartListPart(
    userToken: paths["/api/v3/users/{user_token}/partlists/{list_id}/parts/{part_num}/{color_id}/"]["get"]["parameters"]["path"]["user_token"],
    listId: paths["/api/v3/users/{user_token}/partlists/{list_id}/parts/{part_num}/{color_id}/"]["get"]["parameters"]["path"]["list_id"],
    partNum: paths["/api/v3/users/{user_token}/partlists/{list_id}/parts/{part_num}/{color_id}/"]["get"]["parameters"]["path"]["part_num"],
    colorId: paths["/api/v3/users/{user_token}/partlists/{list_id}/parts/{part_num}/{color_id}/"]["get"]["parameters"]["path"]["color_id"]
  ): Promise<UserPart> {
    const response = await this.client.get<UserPart>(
      `/api/v3/users/${userToken}/partlists/${listId}/parts/${partNum}/${colorId}/`
    );
    return response.data;
  }

  async updateUserPartListPart(
    userToken: paths["/api/v3/users/{user_token}/partlists/{list_id}/parts/{part_num}/{color_id}/"]["put"]["parameters"]["path"]["user_token"],
    listId: paths["/api/v3/users/{user_token}/partlists/{list_id}/parts/{part_num}/{color_id}/"]["put"]["parameters"]["path"]["list_id"],
    partNum: paths["/api/v3/users/{user_token}/partlists/{list_id}/parts/{part_num}/{color_id}/"]["put"]["parameters"]["path"]["part_num"],
    colorId: paths["/api/v3/users/{user_token}/partlists/{list_id}/parts/{part_num}/{color_id}/"]["put"]["parameters"]["path"]["color_id"],
    data: {
      quantity: number;
    }
  ): Promise<UserPart> {
    const response = await this.client.put<UserPart>(
      `/api/v3/users/${userToken}/partlists/${listId}/parts/${partNum}/${colorId}/`,
      new URLSearchParams({
        quantity: data.quantity.toString(),
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data;
  }

  async deleteUserPartListPart(
    userToken: paths["/api/v3/users/{user_token}/partlists/{list_id}/parts/{part_num}/{color_id}/"]["delete"]["parameters"]["path"]["user_token"],
    listId: paths["/api/v3/users/{user_token}/partlists/{list_id}/parts/{part_num}/{color_id}/"]["delete"]["parameters"]["path"]["list_id"],
    partNum: paths["/api/v3/users/{user_token}/partlists/{list_id}/parts/{part_num}/{color_id}/"]["delete"]["parameters"]["path"]["part_num"],
    colorId: paths["/api/v3/users/{user_token}/partlists/{list_id}/parts/{part_num}/{color_id}/"]["delete"]["parameters"]["path"]["color_id"]
  ): Promise<void> {
    await this.client.delete(
      `/api/v3/users/${userToken}/partlists/${listId}/parts/${partNum}/${colorId}/`
    );
  }

  async getUserParts(
    userToken: paths["/api/v3/users/{user_token}/parts/"]["get"]["parameters"]["path"]["user_token"],
    params?: paths["/api/v3/users/{user_token}/parts/"]["get"]["parameters"]["query"]
  ): Promise<PaginatedResponse<UserPart>> {
    const response = await this.client.get<PaginatedResponse<UserPart>>(
      `/api/v3/users/${userToken}/parts/`,
      { params }
    );
    return response.data;
  }

  async getUserSetLists(
    userToken: paths["/api/v3/users/{user_token}/setlists/"]["get"]["parameters"]["path"]["user_token"],
    params?: paths["/api/v3/users/{user_token}/setlists/"]["get"]["parameters"]["query"]
  ): Promise<PaginatedResponse<SetList>> {
    const response = await this.client.get<PaginatedResponse<SetList>>(
      `/api/v3/users/${userToken}/setlists/`,
      { params }
    );
    return response.data;
  }

  async createUserSetList(
    userToken: paths["/api/v3/users/{user_token}/setlists/"]["post"]["parameters"]["path"]["user_token"],
    data: {
      name: string;
      is_buildable?: boolean;
      num_sets?: number;
    }
  ): Promise<SetList> {
    const response = await this.client.post<SetList>(
      `/api/v3/users/${userToken}/setlists/`,
      new URLSearchParams({
        name: data.name,
        ...(data.is_buildable !== undefined && {
          is_buildable: data.is_buildable.toString(),
        }),
        ...(data.num_sets && { num_sets: data.num_sets.toString() }),
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data;
  }

  async getUserSetList(
    userToken: paths["/api/v3/users/{user_token}/setlists/{list_id}/"]["get"]["parameters"]["path"]["user_token"],
    listId: paths["/api/v3/users/{user_token}/setlists/{list_id}/"]["get"]["parameters"]["path"]["list_id"]
  ): Promise<SetList> {
    const response = await this.client.get<SetList>(
      `/api/v3/users/${userToken}/setlists/${listId}/`
    );
    return response.data;
  }

  async updateUserSetList(
    userToken: paths["/api/v3/users/{user_token}/setlists/{list_id}/"]["put"]["parameters"]["path"]["user_token"],
    listId: paths["/api/v3/users/{user_token}/setlists/{list_id}/"]["put"]["parameters"]["path"]["list_id"],
    data: {
      name: string;
      is_buildable?: boolean;
      num_sets?: number;
    }
  ): Promise<SetList> {
    const response = await this.client.put<SetList>(
      `/api/v3/users/${userToken}/setlists/${listId}/`,
      new URLSearchParams({
        name: data.name,
        ...(data.is_buildable !== undefined && {
          is_buildable: data.is_buildable.toString(),
        }),
        ...(data.num_sets && { num_sets: data.num_sets.toString() }),
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data;
  }

  async patchUserSetList(
    userToken: paths["/api/v3/users/{user_token}/setlists/{list_id}/"]["patch"]["parameters"]["path"]["user_token"],
    listId: paths["/api/v3/users/{user_token}/setlists/{list_id}/"]["patch"]["parameters"]["path"]["list_id"],
    data: {
      name?: string;
      is_buildable?: boolean;
      num_sets?: number;
    }
  ): Promise<SetList> {
    const response = await this.client.patch<SetList>(
      `/api/v3/users/${userToken}/setlists/${listId}/`,
      new URLSearchParams({
        ...(data.name && { name: data.name }),
        ...(data.is_buildable !== undefined && {
          is_buildable: data.is_buildable.toString(),
        }),
        ...(data.num_sets && { num_sets: data.num_sets.toString() }),
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data;
  }

  async deleteUserSetList(
    userToken: paths["/api/v3/users/{user_token}/setlists/{list_id}/"]["delete"]["parameters"]["path"]["user_token"],
    listId: paths["/api/v3/users/{user_token}/setlists/{list_id}/"]["delete"]["parameters"]["path"]["list_id"]
  ): Promise<void> {
    await this.client.delete(`/api/v3/users/${userToken}/setlists/${listId}/`);
  }

  async getUserSetListSets(
    userToken: paths["/api/v3/users/{user_token}/setlists/{list_id}/sets/"]["get"]["parameters"]["path"]["user_token"],
    listId: paths["/api/v3/users/{user_token}/setlists/{list_id}/sets/"]["get"]["parameters"]["path"]["list_id"],
    params?: paths["/api/v3/users/{user_token}/setlists/{list_id}/sets/"]["get"]["parameters"]["query"]
  ): Promise<PaginatedResponse<UserSet>> {
    const response = await this.client.get<PaginatedResponse<UserSet>>(
      `/api/v3/users/${userToken}/setlists/${listId}/sets/`,
      { params }
    );
    return response.data;
  }

  async addUserSetListSet(
    userToken: paths["/api/v3/users/{user_token}/setlists/{list_id}/sets/"]["post"]["parameters"]["path"]["user_token"],
    listId: paths["/api/v3/users/{user_token}/setlists/{list_id}/sets/"]["post"]["parameters"]["path"]["list_id"],
    data: {
      set_num: string;
      quantity?: number;
      include_spares?: boolean;
    }
  ): Promise<UserSet> {
    const response = await this.client.post<UserSet>(
      `/api/v3/users/${userToken}/setlists/${listId}/sets/`,
      new URLSearchParams({
        set_num: data.set_num,
        ...(data.quantity && { quantity: data.quantity.toString() }),
        ...(data.include_spares !== undefined && {
          include_spares: data.include_spares.toString(),
        }),
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data;
  }

  async getUserSetListSet(
    userToken: paths["/api/v3/users/{user_token}/setlists/{list_id}/sets/{set_num}/"]["get"]["parameters"]["path"]["user_token"],
    listId: paths["/api/v3/users/{user_token}/setlists/{list_id}/sets/{set_num}/"]["get"]["parameters"]["path"]["list_id"],
    setNum: paths["/api/v3/users/{user_token}/setlists/{list_id}/sets/{set_num}/"]["get"]["parameters"]["path"]["set_num"]
  ): Promise<UserSet> {
    const response = await this.client.get<UserSet>(
      `/api/v3/users/${userToken}/setlists/${listId}/sets/${setNum}/`
    );
    return response.data;
  }

  async updateUserSetListSet(
    userToken: paths["/api/v3/users/{user_token}/setlists/{list_id}/sets/{set_num}/"]["put"]["parameters"]["path"]["user_token"],
    listId: paths["/api/v3/users/{user_token}/setlists/{list_id}/sets/{set_num}/"]["put"]["parameters"]["path"]["list_id"],
    setNum: paths["/api/v3/users/{user_token}/setlists/{list_id}/sets/{set_num}/"]["put"]["parameters"]["path"]["set_num"],
    data: {
      quantity?: number;
      include_spares?: boolean;
    }
  ): Promise<UserSet> {
    const response = await this.client.put<UserSet>(
      `/api/v3/users/${userToken}/setlists/${listId}/sets/${setNum}/`,
      new URLSearchParams({
        ...(data.quantity && { quantity: data.quantity.toString() }),
        ...(data.include_spares !== undefined && {
          include_spares: data.include_spares.toString(),
        }),
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data;
  }

  async patchUserSetListSet(
    userToken: paths["/api/v3/users/{user_token}/setlists/{list_id}/sets/{set_num}/"]["patch"]["parameters"]["path"]["user_token"],
    listId: paths["/api/v3/users/{user_token}/setlists/{list_id}/sets/{set_num}/"]["patch"]["parameters"]["path"]["list_id"],
    setNum: paths["/api/v3/users/{user_token}/setlists/{list_id}/sets/{set_num}/"]["patch"]["parameters"]["path"]["set_num"],
    data: {
      quantity?: number;
      include_spares?: boolean;
    }
  ): Promise<UserSet> {
    const response = await this.client.patch<UserSet>(
      `/api/v3/users/${userToken}/setlists/${listId}/sets/${setNum}/`,
      new URLSearchParams({
        ...(data.quantity && { quantity: data.quantity.toString() }),
        ...(data.include_spares !== undefined && {
          include_spares: data.include_spares.toString(),
        }),
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data;
  }

  async deleteUserSetListSet(
    userToken: paths["/api/v3/users/{user_token}/setlists/{list_id}/sets/{set_num}/"]["delete"]["parameters"]["path"]["user_token"],
    listId: paths["/api/v3/users/{user_token}/setlists/{list_id}/sets/{set_num}/"]["delete"]["parameters"]["path"]["list_id"],
    setNum: paths["/api/v3/users/{user_token}/setlists/{list_id}/sets/{set_num}/"]["delete"]["parameters"]["path"]["set_num"]
  ): Promise<void> {
    await this.client.delete(
      `/api/v3/users/${userToken}/setlists/${listId}/sets/${setNum}/`
    );
  }

  async getUserSets(
    userToken: paths["/api/v3/users/{user_token}/sets/"]["get"]["parameters"]["path"]["user_token"],
    params?: paths["/api/v3/users/{user_token}/sets/"]["get"]["parameters"]["query"]
  ): Promise<PaginatedResponse<UserSet>> {
    const response = await this.client.get<PaginatedResponse<UserSet>>(
      `/api/v3/users/${userToken}/sets/`,
      { params }
    );
    return response.data;
  }

  async addUserSet(
    userToken: paths["/api/v3/users/{user_token}/sets/"]["post"]["parameters"]["path"]["user_token"],
    data: {
      set_num: string;
      quantity?: number;
      include_spares?: boolean;
    }
  ): Promise<UserSet> {
    const response = await this.client.post<UserSet>(
      `/api/v3/users/${userToken}/sets/`,
      new URLSearchParams({
        set_num: data.set_num,
        ...(data.quantity && { quantity: data.quantity.toString() }),
        ...(data.include_spares !== undefined && {
          include_spares: data.include_spares.toString(),
        }),
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data;
  }

  async syncUserSets(
    userToken: paths["/api/v3/users/{user_token}/sets/sync/"]["post"]["parameters"]["path"]["user_token"],
    data: {
      set_num: string;
      quantity?: number;
      include_spares?: boolean;
    }
  ): Promise<UserSet> {
    const response = await this.client.post<UserSet>(
      `/api/v3/users/${userToken}/sets/sync/`,
      new URLSearchParams({
        set_num: data.set_num,
        ...(data.quantity && { quantity: data.quantity.toString() }),
        ...(data.include_spares !== undefined && {
          include_spares: data.include_spares.toString(),
        }),
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data;
  }

  async getUserSet(
    userToken: paths["/api/v3/users/{user_token}/sets/{set_num}/"]["get"]["parameters"]["path"]["user_token"],
    setNum: paths["/api/v3/users/{user_token}/sets/{set_num}/"]["get"]["parameters"]["path"]["set_num"],
    params?: paths["/api/v3/users/{user_token}/sets/{set_num}/"]["get"]["parameters"]["query"]
  ): Promise<UserSet> {
    const response = await this.client.get<UserSet>(
      `/api/v3/users/${userToken}/sets/${setNum}/`,
      { params }
    );
    return response.data;
  }

  async updateUserSet(
    userToken: paths["/api/v3/users/{user_token}/sets/{set_num}/"]["put"]["parameters"]["path"]["user_token"],
    setNum: paths["/api/v3/users/{user_token}/sets/{set_num}/"]["put"]["parameters"]["path"]["set_num"],
    data: {
      quantity?: number;
    }
  ): Promise<UserSet> {
    const response = await this.client.put<UserSet>(
      `/api/v3/users/${userToken}/sets/${setNum}/`,
      new URLSearchParams({
        ...(data.quantity && { quantity: data.quantity.toString() }),
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data;
  }

  async deleteUserSet(
    userToken: paths["/api/v3/users/{user_token}/sets/{set_num}/"]["delete"]["parameters"]["path"]["user_token"],
    setNum: paths["/api/v3/users/{user_token}/sets/{set_num}/"]["delete"]["parameters"]["path"]["set_num"]
  ): Promise<void> {
    await this.client.delete(`/api/v3/users/${userToken}/sets/${setNum}/`);
  }
}
