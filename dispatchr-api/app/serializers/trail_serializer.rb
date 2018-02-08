class TrailSerializer
  include FastJsonapi::ObjectSerializer

  attributes :name, :rating, :peak

end
