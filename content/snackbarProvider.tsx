"use client";
import React from "react";
import { SnackbarProvider } from "notistack";
import { SnackbarUtilsConfigurator } from "./snackbar";

export default function SnackbarProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SnackbarProvider
      maxSnack={6}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      // action={(key) => <SnackbarCloseButton key={key} />}
    >
      <SnackbarUtilsConfigurator />
      {children}
    </SnackbarProvider>
  );
}
