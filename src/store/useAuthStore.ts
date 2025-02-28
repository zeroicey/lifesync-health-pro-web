import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface UserInfo {
  id: string
  name: string
  email: string
  avatar?: string
  role?: string
  joinDate?: string
}

interface AuthState {
  isAuthenticated: boolean
  user: UserInfo | null
  token: string | null
  login: (user: UserInfo, token: string) => void
  logout: () => void
  updateUser: (user: Partial<UserInfo>) => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      token: null,
      login: (user: UserInfo, token: string) =>
        set({
          isAuthenticated: true,
          user,
          token,
        }),
      logout: () =>
        set({
          isAuthenticated: false,
          user: null,
          token: null,
        }),
      updateUser: (userUpdate: Partial<UserInfo>) =>
        set((state) => ({
          user: state.user ? { ...state.user, ...userUpdate } : null,
        })),
    }),
    {
      name: 'auth-storage',
    }
  )
)
