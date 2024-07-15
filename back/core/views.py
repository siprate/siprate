from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Software
from .serializers import SoftwaresSerializer

import json

@api_view(['GET'])
def getSoftwares(request):

    if request.method == 'GET':
        softwares = Software.objects.all()
        serializer = SoftwaresSerializer(softwares, many=True)
        return Response(serializer.data)

    return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def getSoftware(request, id):

    try:
        nome_software = Software.objects.get(pk=id)
    except:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = SoftwaresSerializer(nome_software, many=False)
        return Response(serializer.data)

    return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def addSoftwares(request):

    if request.method == 'POST':
        novo_software = request.data

        serializer = SoftwaresSerializer(data=novo_software)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT', 'DELETE'])
def putAndDeleteSoftware(request, id):

    if request.method == 'PUT':
        try:
            software = Software.objects.get(pk=id)
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = SoftwaresSerializer(instance=software, data=request.data)

        if serializer.is_valid():
            serializer.save()

        return Response(serializer.data, status=status.HTTP_200_OK)

    if request.method == 'DELETE':
        try:
            software = Software.objects.get(pk=id)
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)

        software.delete()

        return Response('Software deletado com sucesso!', status=status.HTTP_204_NO_CONTENT)

    return Response(status=status.HTTP_400_BAD_REQUEST)
