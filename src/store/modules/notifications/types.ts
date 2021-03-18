export interface INotification {
    title?: string;
    message: string;
    time: number;
}

export interface INotificationState {
    notifications: Array<INotification>;
}

export interface IToast {
    variant: string;
    message: string;
    title?: string;
    autoHideDelay?: number;
}
