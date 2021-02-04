import { IProfileState } from '../../reducers/profile';

export enum ProfileActions {
  PROFILE_REQUEST = 'PROFILE_REQUEST',
  PROFILE_SUCCESS = 'PROFILE_SUCCESS',
  PROFILE_FAILURE = 'PROFILE_FAILURE',
}

export const fetchProfile = () => ({ type: ProfileActions.PROFILE_REQUEST });
export const fetchProfileSuccess = (profile: IProfileState) => ({ type: ProfileActions.PROFILE_SUCCESS, profile });
export const fetchProfileFailure = (error: Error) => ({ type: ProfileActions.PROFILE_FAILURE, error: error.message });
