package services

import (
	"DMP2S/internal/infrastructure/supabaseclient"
	"context"
	"errors"

	"github.com/nedpals/supabase-go"
)

// RegisterUser handles user registration
// func RegisterUser(email string, password string) (*supabase.User, error) {
// 	supabaseClient := supabaseclient.InitSupabaseClient()
// 	user, err := supabaseClient.Auth.SignUp(context.Background(), supabase.UserCredentials{
// 		Email:    email,
// 		Password: password,
// 	})
// 	if err != nil {
// 		log.Printf("Supabase registration error: %v", err)
// 		return nil, errors.New("registration failed: " + err.Error())
// 	}
// 	return user, nil
// }

func RegisterUser(email string, password string) (*supabase.User, error) {
	supabaseClient := supabaseclient.InitSupabaseClient()

	user, err := supabaseClient.Auth.SignUp(context.Background(), supabase.UserCredentials{
		Email:    email,
		Password: password,
	})

	if err != nil {
		return nil, errors.New("registration failed: " + err.Error())
	}
	return user, nil
}

// LoginUser handles user login
func LoginUser(email, password string) (*supabase.AuthenticatedDetails, error) {
	supabaseClient := supabaseclient.InitSupabaseClient()
	user, err := supabaseClient.Auth.SignIn(context.Background(), supabase.UserCredentials{
		Email:    email,
		Password: password,
	})
	if err != nil {
		return nil, errors.New("login failed: " + err.Error())
	}
	return user, nil
}
