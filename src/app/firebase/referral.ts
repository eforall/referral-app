export interface Referral {
    timestamp: number,
    rid: string,
    cid: string,
    from_pid: string,
    to_pid: string,
    status: string,
}

export interface ReferralDetail extends Referral {
    from_uid: string,
    from_notes: string,
    to_uid: string,
    to_notes: string,
    jobs_created: string,
    jobs_preserved: string,
    financing_received: string,
}

export interface ReferralDetails {
    [rid: string]: ReferralDetail
}