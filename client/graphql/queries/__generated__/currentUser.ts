/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Stat, WeaponEffectType, BuildGender } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: currentUser
// ====================================================

export interface currentUser_currentUser_favoriteItems_stats {
  __typename: "ItemStat";
  id: any;
  order: number;
  maxValue: number | null;
  stat: Stat | null;
  customStat: string | null;
}

export interface currentUser_currentUser_favoriteItems_weaponStats_weaponEffects {
  __typename: "WeaponEffect";
  id: any;
  minDamage: number | null;
  maxDamage: number;
  effectType: WeaponEffectType;
}

export interface currentUser_currentUser_favoriteItems_weaponStats {
  __typename: "WeaponStat";
  id: any;
  apCost: number;
  usesPerTurn: number;
  minRange: number | null;
  maxRange: number;
  baseCritChance: number | null;
  critBonusDamage: number | null;
  weaponEffects: currentUser_currentUser_favoriteItems_weaponStats_weaponEffects[];
}

export interface currentUser_currentUser_favoriteItems_itemType_eligibleItemSlots {
  __typename: "ItemSlot";
  id: any;
  enName: string;
  order: number;
}

export interface currentUser_currentUser_favoriteItems_itemType {
  __typename: "ItemType";
  id: any;
  name: string;
  enName: string;
  eligibleItemSlots: currentUser_currentUser_favoriteItems_itemType_eligibleItemSlots[];
}

export interface currentUser_currentUser_favoriteItems_set_bonuses {
  __typename: "SetBonus";
  id: any;
  numItems: number;
  stat: Stat | null;
  value: number | null;
  customStat: string | null;
}

export interface currentUser_currentUser_favoriteItems_set {
  __typename: "Set";
  id: any;
  name: string;
  bonuses: currentUser_currentUser_favoriteItems_set_bonuses[];
}

export interface currentUser_currentUser_favoriteItems_buffs {
  __typename: "Buff";
  id: any;
  stat: Stat;
  incrementBy: number | null;
  critIncrementBy: number | null;
  maxStacks: number | null;
}

export interface currentUser_currentUser_favoriteItems {
  __typename: "Item";
  id: any;
  name: string;
  level: number;
  imageUrl: string;
  stats: currentUser_currentUser_favoriteItems_stats[];
  weaponStats: currentUser_currentUser_favoriteItems_weaponStats | null;
  conditions: any | null;
  itemType: currentUser_currentUser_favoriteItems_itemType;
  set: currentUser_currentUser_favoriteItems_set | null;
  buffs: currentUser_currentUser_favoriteItems_buffs[] | null;
}

export interface currentUser_currentUser_settings_buildClass {
  __typename: "Class";
  id: any;
  maleFaceImageUrl: string;
  femaleFaceImageUrl: string;
  maleSpriteImageUrl: string;
  femaleSpriteImageUrl: string;
  name: string;
}

export interface currentUser_currentUser_settings {
  __typename: "UserSetting";
  id: any;
  buildGender: BuildGender;
  buildClass: currentUser_currentUser_settings_buildClass | null;
}

export interface currentUser_currentUser {
  __typename: "User";
  id: any;
  username: string;
  email: string;
  verified: boolean;
  favoriteItems: currentUser_currentUser_favoriteItems[];
  settings: currentUser_currentUser_settings;
}

export interface currentUser {
  currentUser: currentUser_currentUser | null;
}
