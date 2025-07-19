export interface Color {
  id: number;
  name: string;
  rgb: string;
  is_trans: boolean;
  external_ids: any;
}

export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface Part {
  part_num: string;
  name: string;
  part_cat_id: number;
  part_url: string;
  part_img_url: string;
  external_ids: any;
}

export interface Element {
  part: Part;
  color: Color;
  element_id: string;
  design_id: string;
  element_img_url: string;
  part_img_url: string;
}

export interface Minifig {
  set_num: string;
  name: string;
  num_parts: number;
  set_img_url: string;
  set_url: string;
  last_modified_dt: string;
}

export interface MinifigPart {
  id: number;
  inv_part_id: number;
  part: Part;
  color: Color;
  set_num: string;
  quantity: number;
  is_spare: boolean;
  element_id: string;
  num_sets: number;
}

export interface Set {
  set_num: string;
  name: string;
  year: number;
  theme_id: number;
  num_parts: number;
  set_img_url: string;
  set_url: string;
  last_modified_dt: string;
}

export interface PartCategory {
  id: number;
  name: string;
  part_count: number;
}

export interface PartColor {
  color_id: number;
  color_name: string;
  num_sets: number;
  num_set_parts: number;
  part_img_url: string;
  elements: string[];
}

export interface Moc {
  set_num: string;
  name: string;
  year: number;
  theme_id: number;
  num_parts: number;
  moc_img_url: string;
  moc_url: string;
  designer_name: string;
  designer_url: string;
}

export interface SetPart {
  id: number;
  inv_part_id: number;
  part: Part;
  color: Color;
  set_num: string;
  quantity: number;
  is_spare: boolean;
  element_id: string;
  num_sets: number;
}

export interface Theme {
  id: number;
  parent_id: number | null;
  name: string;
}

export interface UserToken {
  user_token: string;
}

export interface Badge {
  id: number;
  name: string;
  description: string;
  badge_img_url: string;
}

export interface UserProfile {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar_img_url: string;
  location: string;
  website_url: string;
  bio: string;
  num_owned_sets: number;
  num_owned_parts: number;
  num_wanted_sets: number;
  num_wanted_parts: number;
}

export interface PartList {
  id: number;
  name: string;
  num_parts: number;
  is_buildable: boolean;
}

export interface SetList {
  id: number;
  name: string;
  num_sets: number;
  is_buildable: boolean;
}

export interface UserPart {
  id: number;
  part: Part;
  color: Color;
  quantity: number;
  list_id: number;
}

export interface UserSet {
  set_num: string;
  quantity: number;
  include_spares: boolean;
  list_id: number;
  set: Set;
}

export interface LostPart {
  id: number;
  inv_part_id: number;
  lost_quantity: number;
  part: Part;
  color: Color;
}

export interface BuildInfo {
  set: Set;
  can_build: boolean;
  build_match: number;
  missing_parts: number;
  total_parts: number;
}
