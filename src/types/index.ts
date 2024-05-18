import React from "react";

export type Children = {
    children: React.ReactNode
}


export type DoctorType = {
    address: String,
    attachmentResultDto: String | null,
    contactNumber: String,
    dateOfBirth: String,
    email: String,
    firstName: String | any,
    lastName: String,
    gender: Number,
    specialization: String,
    hospital?: {
        capacity: Number,
        contactNumber: String,
        id: Number,
        isOpen: Boolean,
        location: Number,
        name: String
    }
}

export type UserType = {
    attachment: String | null,
    attachmentId: Number | null,
    createdAt: String,
    updatedAt: String,
    dateOfBirth: String,
    email: String,
    firstname: String,
    lastname: String,
    id: Number,
    isDeleted: Boolean,
    password: String,
    userRole: Number
}


export type AppointmentType = {
    doctor: DoctorType,
    user: UserType,
    doctorId: Number,
    userId: Number,
    id: Number,
    isActive: Boolean,
    from: String,
    to: String
}