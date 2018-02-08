class UserSerializer
  include FastJsonapi::ObjectSerializer

  attributes :full_name, :email, :nsp_number

end
